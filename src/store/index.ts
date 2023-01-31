import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import type { AppStore } from '@/models/store';
import appReducer from '@/reducers';

const debug = process.env.NODE_ENV !== 'production';

export const makeStore = () =>
  configureStore({ reducer: appReducer, devTools: debug });

const wrapper = createWrapper<AppStore>(makeStore, { debug: false });

export default wrapper;
