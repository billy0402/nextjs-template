import type { ThunkAction } from '@reduxjs/toolkit';
import type { Action } from 'redux';

import type { makeStore } from '@/redux/store';

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
