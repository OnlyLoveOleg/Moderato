import { BaseConfig } from './_base';

/**
 * @desc Config まとめクラス
 *       objectよりも可読性は上がるが、ほんの少しパフォーマンスが落ちる
 */

/** App System config */
export class AppConfig extends BaseConfig {
  private readonly MICRO_CMS_DOMAIN = process.env.MICRO_CMS_DOMAIN ?? '';

  private readonly MICRO_CMS_API_KEY = process.env.MICRO_CMS_API_KEY ?? '';

  private readonly PUBLIC_URL = process.env.PUBLIC_URL ?? 'http://localhost:3000';

  public get microCMSDomain(): string {
    return this.MICRO_CMS_DOMAIN;
  }

  public get microCMSApiKey(): string {
    return this.MICRO_CMS_API_KEY;
  }

  public get publicURL(): string {
    return this.PUBLIC_URL;
  }
}

/** App Meta */
export class AppMetaConfig extends BaseConfig {
  private readonly title: string;

  private readonly description: string;

  private readonly url: string;

  private readonly ogImg: string;

  constructor() {
    super();
    this.title = 'naohito-T | portfolio';
    this.description =
      '千葉出身。都内（銀座）での美容師経験があるソフトウェアエンジニア。モデル撮影のために購入したmacを使っていたらPCの仕組みが気になり始め、気づいたらエンジニアに。人生まるごとクリエイティブだと思っている。人の髪をデザインしていた経験をIT業界へ活かせることはないか日々模索中。';
    // TODO vercelの入れて
    this.url = this.runEnv === 'development' ? 'http://localhost:3000/' : '';
    this.ogImg = '/images/about_me.jpg';
  }

  public get getTitle(): string {
    return this.title;
  }

  public get getDesc(): string {
    return this.description;
  }

  public get getUrl(): string {
    return this.url;
  }

  public get getOgImg(): string {
    return this.ogImg;
  }
}

/** blogのdefault config */
export const DefBlogToImg = {
  design: './default/design.jpg.webp',
  front: './default/front.jpg.webp',
  server: '',
  infra: './default/infra.jpg.webp',
} as const;
