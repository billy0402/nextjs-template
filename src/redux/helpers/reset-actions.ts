import type { PayloadAction } from '@reduxjs/toolkit';

import type { ApiState } from '@/redux/models/api/api-state';

export type ApiStateAction<T extends ApiState> =
  keyof T['error'] extends `${infer P}Error` ? P : never;

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
