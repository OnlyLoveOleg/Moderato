import type { Page, Response, BrowserContext } from 'playwright';
import { Config } from '@/config';

/**
 * @desc PageオブジェクトでこのModelを継承する
 *       基本運用としてはBaseにmethodをまとめる。
 *       各Pageでしか使わないものは各Pageオブジェクトで定義する
 */
export abstract class BasePageModel {
  protected readonly page: Page;

  protected readonly path: string;

  protected readonly config: Config;

  constructor(page: Page, path: string) {
    this.config = new Config();
    this.page = page;
    this.path = `${this.config.publicURL}${path}`;
  }

  /** @desc 指定のpageを開く */
  public async navigate(): Promise<Response | null> {
    return this.page.goto(this.path);
  }

  /** @desc 要素をクリックしnext Pageに遷移するまで待機する */
  public async navigateClickLoad(page: Page, selector: string, url?: string): Promise<Response | null> {
    if (url) {
      const [nextPage] = await Promise.all([page.waitForNavigation({ url }), page.click(selector)]);
      return nextPage;
    } else {
      const [nextPage] = await Promise.all([page.waitForNavigation(), page.click(selector)]);
      return nextPage;
    }
  }

  /** @desc 要素をクリックし別タブウィンドウに遷移するまで待機する */
  public async navigateClickNewTab(page: Page, context: BrowserContext, selector: string): Promise<Page> {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.locator(selector).click(), // Opens a new tab
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }

  /** @desc inputにtextを入力する */
  public async fillText(page: Page, selector: string, input: string): Promise<void> {
    await page.locator(selector).click();
    await page.locator(selector).fill(input);
  }

  /** @desc 指定ミリ秒待機させる */
  public async waitTime(page: Page, time = 2000): Promise<void> {
    await page.waitForTimeout(time);
  }

  /**
   * @desc 現在のPage Object URLと最初に設定したPage URLに相違がないか
   */
  public get isCurrentPage(): boolean {
    return this.page.url() === this.path;
  }

  /** @desc 現在のpage objectを返す */
  public get getCurrentPage(): Page {
    return this.page;
  }
}
