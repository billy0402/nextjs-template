import type { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import type { ReducerName } from '@/redux/enums/reducer-name';
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from '@/redux/models/api/api-action';
import type { ApiState, ApiStatusType } from '@/redux/models/api/api-state';

/**
 * Get action type from redux action type string.
 *
 * @param {string} value - A action type string from redux action
 * @param {ReducerName} prefix - A reducer name prefix string
 * @return {string} A action type string
 *
 * @example
 *
 *     getActionType('auth/login/fulfilled', 'auth') // 'login'
 */
function getActionType(value: string, prefix: ReducerName) {
  return value.substring(prefix.length).split('/')[1];
}

/**
 * Convert api status type to status object with loading. success. failed key with boolean value.
 *
 * @param {string} actionType - A action type string
 * @param {ApiStatusType | null} apiStatusType - A api status type string
 * @return {{ [key: string]: boolean; }} A status object with loading. success. failed key with boolean value
 *
 * @example
 *
 *    toApiStatus('login', 'loading') // { loginLoading: true, loginSuccess: false, loginFailed: false }
 *    toApiStatus('login', 'success') // { loginLoading: false, loginSuccess: true, loginFailed: false }
 *    toApiStatus('login', 'failed') // { loginLoading: false, loginSuccess: false, loginFailed: true }
 */
export function toApiStatus(
  actionType: string,
  apiStatusType: ApiStatusType | null,
) {
  return {
    [`${actionType}Loading`]: apiStatusType === 'loading',
    [`${actionType}Success`]: apiStatusType === 'success',
    [`${actionType}Failed`]: apiStatusType === 'failed',
  };
}

/**
 * Create async matcher for redux toolkit.
 * This function will add 3 extra reducers for each async action type.
 * The extra reducers are loading. success. failed.
 * The extra reducers will be added to the state with the action type name.
 *
 * @param {ActionReducerMapBuilder<ApiState>} builder - A ActionReducerMapBuilder from redux toolkit
 * @param {ReducerName} reducerName - A reducer name prefix string
 * @return {void}
 *
 * @example
 *
 * const authSlice = createSlice({
 *   name: ReducerName.AUTH,
 *   initialState,
 *   reducers: {},
 *   extraReducers: (builder) => {
 *     asyncMatcher(builder, ReducerName.AUTH);
 *   },
 * });
 */
export function asyncMatcher(
  builder: ActionReducerMapBuilder<ApiState>,
  reducerName: ReducerName,
) {
  builder
    .addMatcher(isPendingAction(reducerName), (state, action) => {
      const actionType = getActionType(action.type, reducerName);
      state.status = {
        ...state.status,
        ...toApiStatus(actionType, 'loading'),
      };
      state.error[`${actionType}Error`] = null;
    })
    .addMatcher(isFulfilledAction(reducerName), (state, action) => {
      const actionType = getActionType(action.type, reducerName);
      state.status = {
        ...state.status,
        ...toApiStatus(actionType, 'success'),
      };
    })
    .addMatcher(isRejectedAction(reducerName), (state, action) => {
      const actionType = getActionType(action.type, reducerName);
      state.status = {
        ...state.status,
        ...toApiStatus(actionType, 'failed'),
      };
      state.error[`${actionType}Error`] = (action.error as Error)?.message;
    });
}
