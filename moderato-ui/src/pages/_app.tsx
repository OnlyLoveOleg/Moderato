import { NextPage } from 'next';
import type { AppProps } from 'next/app';
// lib
import { ThemeProvider, createGlobalStyle } from 'styled-components';

// css reset
import '@/styles/sass/reset.scss';
// css base
import '@/styles/sass/base.scss';

// other file
import * as Theme from '@/styles/styled-components/global';
import '../styles/globals.css';
import { mediaPc } from '@/libs/media/mediaQuery';

const GlobalStyle = createGlobalStyle`
  .pc {
    display: none;
    ${mediaPc`
      display: block;
    `}
  }
  .sp {
    display: block;
    ${mediaPc`
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
