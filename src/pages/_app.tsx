import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import Layout from '@/components/Layout';
import wrapper from '@/redux/store';
import '@/styles/globals.scss';

const App = ({ Component, ...pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Head>
        <title>Next.js Template</title>
      </Head>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
