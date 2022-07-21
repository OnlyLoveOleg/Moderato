import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/basePage';

/**
 * @desc contact page
 */
export class ContactTopPage extends BasePageModel {
  constructor(page: Page) {
    super(page, '/contact');
  }
}
