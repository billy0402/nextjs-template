import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider as ReduxProvider } from 'react-redux';

import type { AppState } from '@/redux/models/store';
import appReducer from '@/redux/reducers';

type Props = {
  children?: React.ReactNode;
};

const setupStore = (preloadedState?: Partial<AppState>) => {
  return configureStore({
    reducer: combineReducers(appReducer),
    preloadedState,
  });
};

const store = setupStore();

const ReduxWrapper = ({ children }: Props) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default ReduxWrapper;
