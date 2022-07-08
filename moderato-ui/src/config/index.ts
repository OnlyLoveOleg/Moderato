import { BaseConfig } from './_base';

/** index.tsを綺麗にする。 */
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
