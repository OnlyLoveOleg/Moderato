import { load } from 'cheerio';
import hljs from 'highlight.js';

// https://blog.microcms.io/syntax-highlighting-on-server-side/

/**
 * @desc <pre><code></code></pre>のhtmlにシンタックスハイライトを付与します。
 * cheerio（htmlパーサ）とhighlight.jsというライブラリを使ってサーバーサイドで行えます。
 * APIから返される記事本文は文字列形式（HTMLタグも文字列として取得される）なのでこれをHTMLとして描画するためにdangerouslySetInnerHTMLを使っています
 * サーバーサイドでのシンタックスハイライトでは、HTMLのパースが必要なので面倒でやりたくないという人も多いのではないでしょうか。
 */
export const convertHighlight = (content: string) => {
  const $ = load(content);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  return $.html();
};
