import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { HomeAPI } from '@/libs/apis';
// components
import { Top as TopTpl, Layout } from '@/components/templates';
// mock
import {
  mockDesignBlogList,
  mockFrontBlogList,
  mockServerBlogList,
  mockInfraBlogList,
} from '@/__mocks__/model';

// これは、ビルド時にサーバー側で呼ばれる関数です。この部分の処理は最終的にバンドルJSに含まれません。
// ビルド時にデータを取得し、静的なHTMLを出力するために必要です。
export const getStaticProps = async (context: GetStaticPropsContext) => {
  // カテゴリidが必要。
  const categoryIds = await HomeAPI.fetchCategoryList();

  const [recommendBlogs, latestBlogs] = await Promise.all([
    HomeAPI.fetchRecommendBlogList(),
    HomeAPI.fetchLatestBlogList(),
    // HomeAPI.fetchBlogList({ filters: `category[equals]` }),
    // HomeAPI.fetchBlogList({ filters: `category[equals]` }),
    // HomeAPI.fetchBlogList({ filters: `category[equals]` }),
    // HomeAPI.fetchBlogList({ filters: `category[equals]` }),
  ]);

  console.log(`ddd${JSON.stringify(recommendBlogs)}`);
  console.log(`aaa${JSON.stringify(latestBlogs)}`);
  return {
    props: {
      recommendBlogs,
      latestBlogs,
      // designBlogs,
      // frontBlogs,
      // serverBlogs,
      // infraBlogs,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Top: NextPage<Props> = ({
  recommendBlogs,
  latestBlogs,
  // designBlogs,
  // frontBlogs,
  // serverBlogs,
  // infraBlogs,
}) => {
  return (
    <Layout>
      <TopTpl
        recommendBlogs={recommendBlogs}
        latestBlogs={latestBlogs}
        designBlogs={mockDesignBlogList}
        frontBlogs={mockFrontBlogList}
        serverBlogs={mockServerBlogList}
        infraBlogs={mockInfraBlogList}
      />
    </Layout>
  );
};

export default Top;
