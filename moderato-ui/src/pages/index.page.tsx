import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { HomeAPI } from '@/libs/apis';
// components
import { Top as TopTpl, Layout } from '@/components/templates';
// mock
import {
  mockDesignBlogList,
  mockFrontBlogList,
  mockServerBlogList,
  mockInfraBlogList,
} from '@/tests/__mocks__/model';

// これは、ビルド時にサーバー側で呼ばれる関数です。この部分の処理は最終的にバンドルJSに含まれません。
// ビルド時にデータを取得し、静的なHTMLを出力するために必要です。
export const getStaticProps = async (context: GetStaticPropsContext) => {
  // カテゴリidが必要。
  // const categoryIds = await HomeAPI.fetchCategoryList();
  console.log(context);

  const [recommendBlogs, latestBlogs] = await Promise.all([
    HomeAPI.fetchRecommendBlogList(),
    HomeAPI.fetchLatestBlogList(),
    // HomeAPI.fetchBlogList({ filters: `category[equals]` }),
    // HomeAPI.fetchBlogList({ filters: `category[equals]` }),
    // HomeAPI.fetchBlogList({ filters: `category[equals]` }),
    // HomeAPI.fetchBlogList({ filters: `category[equals]` }),
  ]);

  return {
    props: {
      recommendBlogs,
      latestBlogs,
      designBlogs: mockDesignBlogList,
      frontBlogs: mockFrontBlogList,
      serverBlogs: mockServerBlogList,
      infraBlogs: mockInfraBlogList,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Top: NextPage<Props> = ({
  recommendBlogs,
  latestBlogs,
  designBlogs,
  frontBlogs,
  serverBlogs,
  infraBlogs,
}) => {
  return (
    <Layout>
      <TopTpl
        recommendBlogs={recommendBlogs}
        latestBlogs={latestBlogs}
        designBlogs={designBlogs}
        frontBlogs={frontBlogs}
        serverBlogs={serverBlogs}
        infraBlogs={infraBlogs}
      />
    </Layout>
  );
};

export default Top;
