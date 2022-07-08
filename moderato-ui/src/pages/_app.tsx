import '../styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
