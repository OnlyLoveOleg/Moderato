import { BaseConfig } from './_base';

/**
 * @desc env
 */
export class Config extends BaseConfig {
  private readonly PUBLIC_URL = Config.generateURL(this.runEnv);

  public get publicURL(): string {
    return this.PUBLIC_URL;
  }

  /**
   * @desc 環境によってのサイトURLを生成する
   * @returns
   */
  private static generateURL(env: string): string {
    switch (env) {
      case 'local':
        return process.env.LOCAL_PUBLIC_URL ?? '';
      case 'prod':
        return process.env.PUBLIC_URL ?? '';
      default:
        return process.env.LOCAL_PUBLIC_URL ?? '';
    }
  }
}
