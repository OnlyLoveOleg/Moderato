import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/basePage';

/**
 * @desc news detail page
 */
export class NewsDetailPage extends BasePageModel {
  constructor(page: Page) {
    super(page, '/news/slug');
  }
}
