import type { Page } from 'playwright';

interface NextPage {
  nextPage: Page;
  response: boolean | undefined;
}

interface NextNewTabPage {
  nextNewTabPage: Page;
  nextNewTabPageRes: boolean | undefined;
}

export { NextPage, NextNewTabPage };
