import { StoryFn } from '@storybook/react';

import React, { FC, ReactElement } from 'react';

import { Provider as ReduxProvider } from 'react-redux';

import { makeStore } from '@/redux/store';

const withRedux = (Story: FC): ReturnType<StoryFn<ReactElement>> => {
  const store = makeStore();

  return (
    <ReduxProvider store={store}>
      <Story />
    </ReduxProvider>
  );
};

export default withRedux;
