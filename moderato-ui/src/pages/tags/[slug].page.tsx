import { NextPage, GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import { HomeAPI } from '@/libs/apis';

import { Layout } from '@/components/templates';

interface PathParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const tagList = await HomeAPI.fetchTagList();
  const paths = tagList.map((tag) => ({
    params: { slug: tag.id },
  }));
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: GetStaticPropsContext<PathParams>) => {
  const id = context.params?.slug!;
  /** 同カテゴリのblog */
  const tagContainBlogList = await HomeAPI.fetchTagContainBlogList(id);

  return {
    props: {
      tagContainBlogList,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const TagDetail: NextPage<Props> = ({ tagContainBlogList }) => {
  return (
    <Layout showFooter={true} disableRightClick={true}>
      {tagContainBlogList.map((d) => d.id)}
    </Layout>
  );
};

export default TagDetail;
