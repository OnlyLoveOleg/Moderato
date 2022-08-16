/**
 * HEX 透過表
 * @see https://qiita.com/CUTBOSS/items/6166cf79b9f18c45a010
 */

export interface Theme {
  /**
   * color（HEX単位） HEX6桁
   */
  hex6Color: string;
  /**
   * color（HEX単位） HEX8桁透過あり
   */
  hex8Color?: string;
  /**
   * color（RGB単位）
   */
  rgbColor?: string;
}
