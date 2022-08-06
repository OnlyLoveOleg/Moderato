import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/basePage';

/**
 * @desc /about page
 */
export class AboutPage extends BasePageModel {
  constructor(page: Page) {
    super(page, '/about');
  }
}
