import type { NextFetchEvent, NextRequest } from 'next/server';

/**
 * @see https://zenn.dev/mz/articles/39924d515d4d34
 * @see https://nextjs.org/docs/advanced-features/middleware
 * ここではlogin確認するべき
 *
 * これを一番見ろ
 * @see https://zenn.dev/catnose99/articles/0df722f3f025bb
 */
export const middleware = (req: NextRequest, ev: NextFetchEvent) => {
  // return new Response('Hello, world!');
  // throw new Error();
};
