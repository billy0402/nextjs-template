import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Provider } from 'react-redux';

import Layout from '@/components/Layout';
import { theme } from '@/fixtures/theme';
import wrapper from '@/redux/store';
import '@/styles/globals.scss';

const App = ({ Component, ...pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Head>
        <title>Next.js Template</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
