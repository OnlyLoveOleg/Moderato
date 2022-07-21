import { test as base } from '@playwright/test';

/**
 * @desc Playwright test method 拡張
 *       ここで拡張すれば全page moduleで共通変数が使用できます。
 */

interface TeamsTexts {
  teamsTexts: string[];
}

// ここにportが開いていない場合はerrorを出す処理追加

const test = base.extend<TeamsTexts>({
  teamsTexts: [],
});

export default test;
