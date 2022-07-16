import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { HomeAPI } from '@/libs/apis';

import { Top as TopTpl } from '@/components/templates';

// これは、ビルド時にサーバー側で呼ばれる関数です。この部分の処理は最終的にバンドルJSに含まれません。
// ビルド時にデータを取得し、静的なHTMLを出力するために必要です。
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const blog = await HomeAPI.fetchBlogList();

  return {
    props: {
      blog,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Top: NextPage<Props> = ({ blog }) => {
  return (
    <>
      <TopTpl />
    </>
  );
};

export default Top;
