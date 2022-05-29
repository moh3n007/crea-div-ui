import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ui-components!</title>
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  );
}

export default CustomApp;
