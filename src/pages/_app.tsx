import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next.js Template</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
