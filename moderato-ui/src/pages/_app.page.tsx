import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

// css reset
import '@/styles/sass/reset.scss';
// css base
import '@/styles/sass/global.scss';
// css
import * as Theme from '@/styles/styled-components/global';
// config
import { AppMedia } from '@/config';
const mediaConfig = new AppMedia();

// import dynamic from "next/dynamic";
// Alertコンポーネントはクライアントサイドでのみレンダリングされる
// const Alert = dynamic(() => import("../components/Alert"), { ssr: false });

const GlobalStyle = createGlobalStyle`
  .pc {
    display: block;
    ${mediaConfig.mediaSP`
      display: none;
    `}
  }
  .sp {
    display: block;
    ${mediaConfig.mediaPC`
      display: none;
    `}
  }
`;

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme.theme}>
      <GlobalStyle theme={Theme.theme} />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
};

export default App;
