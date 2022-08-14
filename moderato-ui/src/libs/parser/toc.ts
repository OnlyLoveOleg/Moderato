import { load } from 'cheerio';
/**
 * @desc cheerio html parserを使用し目次を返す
 */
export type TableOfContentsType = {
  text: string;
  id: string;
  name: string;
};

export const extractHeading = (content: string): TableOfContentsType[] => {
  const $ = load(content);
  const headings = $('h1, h2, h3').toArray();
  // toc → TableOfContents
  const toc = headings.map((data) => ({
    // @ts-ignore なぜかchildNodes[0].data プロパティがない
    text: data.childNodes[0].data as string,
    id: data.attribs.id,
    name: data.name,
  }));

  return toc;
};
