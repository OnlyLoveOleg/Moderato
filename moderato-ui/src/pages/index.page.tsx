import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { HomeAPI } from '@/libs/apis';
// components
import { Top as TopTpl, Layout } from '@/components/templates';
import { HttpError, UndefinedError } from '@/libs/error/class';

// mock
import {
  mockDesignBlogList,
  mockFrontBlogList,
  mockServerBlogList,
  mockInfraBlogList,
} from '@/tests/__mocks__/model';

// これは、ビルド時にサーバー側で呼ばれる関数です。この部分の処理は最終的にバンドルJSに含まれません。
// ビルド時にデータを取得し、静的なHTMLを出力するために必要です。
// 余談ですが、この末尾で throw された例外は pages/_error.tsx に着地しますので、Unhandled Error として Component 内でエラーログ収集すると良いでしょう。プロダクションビルドでは到達して欲しくないログ、という事になります。

export const getStaticProps = async (context: GetStaticPropsContext) => {
  try {
    // カテゴリidが必要。
    // const categoryIds = await HomeAPI.fetchCategoryList();
    console.log(context);

    // throw new UndefinedError('sd');

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
  } catch (e: unknown) {
    if (e instanceof HttpError) {
      throw e;
    }
    if (e instanceof UndefinedError) {
      throw e;
    }
    throw e;
  }
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
    <Layout showFooter={true} disableRightClick={true}>
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
