import mediaQuery from 'styled-media-query';
import { BaseConfig } from './_base';

/**
 * @desc Config まとめクラス
 *       objectよりも可読性は上がるが、ほんの少しパフォーマンスが落ちる
 */

/** App System config */
export class AppConfig extends BaseConfig {
  private MICRO_CMS_DOMAIN = process.env.MICRO_CMS_DOMAIN ?? '';

  private MICRO_CMS_API_KEY = process.env.MICRO_CMS_API_KEY ?? '';

  public get microCMSDomain(): string {
    return this.MICRO_CMS_DOMAIN;
  }

  public get microCMSApiKey(): string {
    return this.MICRO_CMS_API_KEY;
  }
}

/** systemのconst的なもの */
export class AppConstraints extends BaseConfig {}

/** App media */
export class AppMedia extends BaseConfig {
  /**
   * @see https://github.com/morajabi/styled-media-query
   * default 設定
   * {
   *    huge: '1440px',
   *    large: '1170px',
   *    medium: '768px',
   *    small: '450px',
   * }
   */

  // @ts-ignore しないといけない（なぜ？）
  private MediaPC = mediaQuery.greaterThan('769px');

  // @ts-ignore
  private MediaSP = mediaQuery.lessThan('768px');

  public get mediaPC() {
    return this.MediaPC;
  }

  public get mediaSP() {
    return this.MediaSP;
  }
}
