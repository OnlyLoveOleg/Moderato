import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/basePage';

/**
 * @desc news page
 */
export class NewsPage extends BasePageModel {
  constructor(page: Page) {
    super(page, '/news');
  }
}
