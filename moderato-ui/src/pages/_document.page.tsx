import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render(): JSX.Element {
    // html要素にdir属性を指定すると、文書全体の書字方向を示すことができる。
    // 日本語や英語などの場合は、左から右へ記述するので ltr を指定します。
    // 以下の効かない
    const { locale } = this.props.__NEXT_DATA__;
    console.log(`;ldooodsjkakg:${locale}`);
    return (
      <Html lang='ja' dir='ltr'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap'
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
