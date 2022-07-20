import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/basePage';

/**
 * @desc contact confirm page
 */
export class ContactConfirmPage extends BasePageModel {
  constructor(page: Page) {
    super(page, '/contact/confirm');
  }
}
