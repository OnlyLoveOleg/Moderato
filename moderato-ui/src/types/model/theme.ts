export interface Theme {
  /**
   * color name
   */
  name: string;
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
