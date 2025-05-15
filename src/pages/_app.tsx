import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider as ReduxProvider } from 'react-redux';

import { initMocks } from '@/__tests__/utils/msw';
import Fonts from '@/components/Fonts';
import Layout from '@/components/Layout';
import { theme } from '@/fixtures/theme';
import { queryClient } from '@/queries/query-client';
import wrapper from '@/redux/store';

initMocks();

const App = ({ Component, ...pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <>
      <Head>
        <title>Next.js Template</title>
      </Head>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <Fonts />
            <Layout>
              <Component {...props.pageProps} />
            </Layout>
          </ChakraProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ReduxProvider>
    </>
  );
};

export default App;
