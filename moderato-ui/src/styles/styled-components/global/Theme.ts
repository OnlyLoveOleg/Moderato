import 'styled-components';

export const theme = {
  black: '#000',
  white: '#fff',
  lightGray: '#dadada',
  gray: '#858585',
  navyBlue: '#2d4b70',
  linkTextBlue: '#1679f2',
  gradationPink01: '43.34deg, #FFDBED 0%, #FC8DAC 100%',
  gradationPink02: '43.34deg, #FFDBED 0%, #FC73B5 100%',
  pink021: '#FFDBED',
  pink022: '#FC73B5',
  gradationViolet01: '43.34deg, #FFEDFA 0%, #D273B5 100%',
  gradationViolet02: '43.34deg, #FFEDFA 0%, #B173D2 100%',
  violet021: '#FFEDFA',
  violet022: '#B173D2',
  gradationBlue01: '43.34deg, #EAE5FC 0%, #A38DFC 100%',
  gradationBlue02: '43.34deg, #E5EAFC 0%, #9AAFFC 100%',
  blue021: '#E5EAFC',
  blue022: '#9AAFFC',
  gradationSky01: '43.34deg, #EAF2FC 0%, #A4D7FC 100%',
  gradationSky02: '43.34deg, #EBF7FF 0%, #7DCFDE 100%',
  sky021: '#EBF7FF',
  sky022: '#7DCFDE',
  gradationGreen01: '43.34deg, #DBF6EE 0%, #91E6DA 100%',
  gradationGreen02: '43.34deg, #DBF6E2 0%, #A0D9B2 100%',
  green021: '#DBF6E2',
  green022: '#A0D9B2',
  gradationLime01: '43.34deg, #EBF6E2 0%, #BAE694 100%',
  gradationLime02: '43.34deg, #F6F6E2 0%, #E5EBA2 100%',
  gradationYellow01: '43.34deg, #FFFBDE 0%, #FAF37D 100%',
  gradationYellow02: '43.34deg, #FFF8E0 0%, #FFD787 100%',
  yellow021: '#FFF8E0',
  yellow022: '#FFD787',
  gradationRed01: '43.34deg, #F6E4DB 0%, #FFC1A0 100%',
  gradationRed02: '43.34deg, #FFE8E8 0%, #FFA8A8 100%',
  red021: '#FFE8E8',
  red022: '#FFA8A8',
  gradationGray01: '43.34deg, #EDEDED 0%, #BDBDBD 100%',
  gray011: '#EDEDED',
  gray012: '#BDBDBD',
  gradationGray02: '43.34deg, #F8F8F8 0%, #DADADA 100%',
  rainbowBar: `#066292 19.99%, #4EC1F0 20%, #4EC1F0 39.99%, #009B4D 40%,
     #009B4D 59.99%, #EE7A00 60%, #EE7A00 79.99%, #DB062C 80%`,
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
