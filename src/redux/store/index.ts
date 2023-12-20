import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { isDebug } from '@/fixtures/constants';
import type { AppStore } from '@/redux/models/store';
import appReducer from '@/redux/reducers';

export function makeStore() {
  return configureStore({ reducer: appReducer, devTools: isDebug });
}

const wrapper = createWrapper<AppStore>(makeStore, { debug: false });

export default wrapper;
