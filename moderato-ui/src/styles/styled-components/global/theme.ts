import 'styled-components';

export const theme = {
  black: '#000',
  white: '#fff',
  descColor: '#FFFFDD',
  techCategoryColor6: '#6127DB',
  techCategoryColor8: '#6127DBA6',
  designCategoryColor6: '#B51792',
  designCategoryColor8: '#B51792A6',
  frontCategoryColor6: '#17B5AB',
  frontCategoryColor8: '#17B5ABA6',
  serverCategoryColor6: '#B5A517',
  serverCategoryColor8: '#B5A517A6',
  infraCategoryColor6: '#2DB517',
  infraCategoryColor8: '#2DB517A6',
} as const;

type Theme = typeof theme;

/**
 * @see https://qiita.com/Takepepe/items/eec6e1d2101570e7e241
 * @desc props.theme.xxx 以降に型が効くようになる。
 * 型定義の注入テクニックです。DefaultTheme として用意された空っぽの interface * に対し、宣言結合拡張することで、プロジェクト固有の型定義を注入することが出来る
 */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
