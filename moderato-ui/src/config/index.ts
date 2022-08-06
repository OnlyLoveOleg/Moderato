import { BaseConfig } from './_base';

/**
 * @desc Config まとめクラス
 *       objectよりも可読性は上がるが、ほんの少しパフォーマンスが落ちる
 */

/** App System config */
export class AppConfig extends BaseConfig {
  private readonly MICRO_CMS_DOMAIN = process.env.MICRO_CMS_DOMAIN ?? '';

  private readonly MICRO_CMS_API_KEY = process.env.MICRO_CMS_API_KEY ?? '';

  public get microCMSDomain(): string {
    return this.MICRO_CMS_DOMAIN;
  }

  public get microCMSApiKey(): string {
    return this.MICRO_CMS_API_KEY;
  }
}

/** systemのconst的なもの */
export const DefBlogToImg = {
  design: './default/design.jpg.webp',
  front: './default/front.jpg.webp',
  server: '',
  infra: './default/infra.jpg.webp',
};
