import type { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { ReducerName } from '@/redux/enums/reducer-name';
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from '@/redux/models/api/api-action-type';
import type { ApiState, ApiStatusType } from '@/redux/models/api/api-state';

const getActionType = (value: string, prefix: string) =>
  value.substring(prefix.length).split('/')[1];

export const toApiStatus = (
  actionType: string,
  apiStatusType: ApiStatusType | null,
) => ({
  [`${actionType}Loading`]: apiStatusType === 'loading',
  [`${actionType}Success`]: apiStatusType === 'success',
  [`${actionType}Failed`]: apiStatusType === 'failed',
});

export const asyncMatcher = (
  builder: ActionReducerMapBuilder<ApiState>,
  reducerName: ReducerName,
) => {
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
};
