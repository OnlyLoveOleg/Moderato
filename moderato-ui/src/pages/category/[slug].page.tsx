import { NextPage, GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'node:querystring';

import { HomeAPI } from '@/libs/apis';

// 静的生成のためのパスを指定します
// Next.js側ではブログのidを知り得ないため、事前に生成するべきHTMLのパスが分かりません。
// そこでこの関数内でデータを取得し、パスを定義してあげる必要があります。
// ここでのパスはmicroCMSのコンテンツIDです。
// blogの量が多くなるとbuildに時間がかかるのでは？

// 参考 https://maku.blog/p/rdq3ep2/

interface PathParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const categoryList = await HomeAPI.fetchCategoryList();
  const paths = categoryList.map((category) => ({
    params: { slug: category.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext<PathParams>) => {
  const id = context.params?.slug!;
  const categoryDetail = await HomeAPI.fetchCategoryDetail(id);

  return {
    props: {
      detail: categoryDetail,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const BlogDetail: NextPage<Props> = ({ detail }) => {
  return (
    <main>
      <h1>{detail.name}</h1>
    </main>
  );
};

/** @desc export defaultでないといけなかった。*/
export default BlogDetail;
