import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { isDebug } from '@/fixtures/constants';
import type { AppStore } from '@/models/store';
import appReducer from '@/reducers';

export const makeStore = () =>
  configureStore({ reducer: appReducer, devTools: isDebug });

const wrapper = createWrapper<AppStore>(makeStore, { debug: false });

export default wrapper;
