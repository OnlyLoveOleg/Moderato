import mediaQuery from 'styled-media-query';

/**
 * @see https://github.com/morajabi/styled-media-query
 * default 設定
 * {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
}
 */

// @ts-ignore しないといけない（なぜ？）
export const mediaPc = mediaQuery.greaterThan('769px');
// @ts-ignore
export const mediaSp = mediaQuery.lessThan('768px');
