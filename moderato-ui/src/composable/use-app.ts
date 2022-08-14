import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/**
 * @desc _app.tsxで使用する
 */
export const useApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // TODO
  // 1. errorハンドリング
  // 2. about pageが早すぎるためdelayする
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setIsLoading(true);
      // await delay(200);
    });

    router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
    });

    router.events.on('routeChangeError', () => {});
  }, []);

  return {
    isLoading,
  };
};

export type UseTop = ReturnType<typeof useApp>;
