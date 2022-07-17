import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='ja'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <noscript>JavaScriptを有効にしてください。.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    } as unknown as DocumentInitialProps;
  } finally {
    sheet.seal();
  }
};
