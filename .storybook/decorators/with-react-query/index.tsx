import { StoryFn } from '@storybook/react';

import React, { FC, ReactElement } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const withReactQuery = (Story: FC): ReturnType<StoryFn<ReactElement>> => {
  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  );
};

export default withReactQuery;
