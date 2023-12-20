import type { PayloadAction } from '@reduxjs/toolkit';

import type { ApiState } from '@/redux/models/api/api-state';

export type ApiStateAction<T extends ApiState> =
  keyof T['error'] extends `${infer P}Error` ? P : never;

/**
 * Create reset actions for redux toolkit.
 *
 * @param {ApiState} initialState - A api state object with status and error default value
 * @return {{ [key: string]: Function }} A reset actions object
 *
 * @example
 *
 *    resetActions<AuthState>(initialState)
 *    // {
 *    //   reset: reset(),
 *    //   resetStatus: resetStatus(state),
 *    //   resetError: resetError(state),
 *    //   resetStatusAndError: resetStatusAndError(state),
 *    //   resetPartialStatus: resetPartialStatus(state, action),
 *    //   resetPartialError: resetPartialError(state, action),
 *    //   resetPartialStatusAndError: resetPartialStatusAndError(state, action)
 *    // }
 */
export function resetActions<T extends ApiState>(initialState: T) {
  return {
    reset: () => initialState,
    resetStatus: (state: T) => {
      state.status = initialState.status;
    },
    resetError: (state: T) => {
      state.error = initialState.error;
    },
    resetStatusAndError: (state: T) => {
      state.status = initialState.status;
      state.error = initialState.error;
    },
    resetPartialStatus: (
      state: T,
      action: PayloadAction<ApiStateAction<T>[]>,
    ) => {
      action.payload.forEach((key) => {
        state.status[`${key}Loading`] = initialState.status[`${key}Loading`];
        state.status[`${key}Success`] = initialState.status[`${key}Success`];
        state.status[`${key}Failed`] = initialState.status[`${key}Failed`];
      });
    },
    resetPartialError: (
      state: T,
      action: PayloadAction<ApiStateAction<T>[]>,
    ) => {
      action.payload.forEach((key) => {
        state.error[`${key}Error`] = initialState.error[`${key}Error`];
      });
    },
    resetPartialStatusAndError: (
      state: T,
      action: PayloadAction<ApiStateAction<T>[]>,
    ) => {
      action.payload.forEach((key) => {
        state.status[`${key}Loading`] = initialState.status[`${key}Loading`];
        state.status[`${key}Success`] = initialState.status[`${key}Success`];
        state.status[`${key}Failed`] = initialState.status[`${key}Failed`];
        state.error[`${key}Error`] = initialState.error[`${key}Error`];
      });
    },
  };
}
