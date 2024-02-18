import type { AppProps } from 'next/app';
import Head from 'next/head';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';

import Layout from '@/components/Layout';
import { queryClient } from '@/helpers/query-client';
import wrapper from '@/redux/store';
import '@/styles/globals.scss';

const App = ({ Component, ...pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Next.js Template</title>
        </Head>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
