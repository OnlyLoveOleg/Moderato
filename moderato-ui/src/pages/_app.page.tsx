import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

// css reset & base
import '@/styles/sass/reset.scss';
import '@/styles/sass/base.scss';
import { Theme, MediaSP, MediaPC } from '@/styles/styled-components/global';

// import dynamic from "next/dynamic";
// Alertコンポーネントはクライアントサイドでのみレンダリングされる
// const Alert = dynamic(() => import("../components/Alert"), { ssr: false });

/** これいるか？ sassに分割してもいいかもo */
const GlobalStyle = createGlobalStyle`
  .pc {
    display: block;
    ${MediaSP`
      display: none;
    `}
  }
  .sp {
    display: block;
    ${MediaPC`
      display: none;
    `}
  }
`;

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme.theme}>
      <GlobalStyle theme={Theme.theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
