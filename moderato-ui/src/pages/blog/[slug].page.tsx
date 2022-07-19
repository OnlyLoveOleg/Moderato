import { NextPage, GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
// import styled from 'styled-components';
import { HomeAPI } from '@/libs/apis';

// 静的生成のためのパスを指定します
// Next.js側ではブログのidを知り得ないため、事前に生成するべきHTMLのパスが分かりません。
// そこでこの関数内でデータを取得し、パスを定義してあげる必要があります。
// ここでのパスはmicroCMSのコンテンツIDです。
// blogの量が多くなるとbuildに時間がかかるのでは？

// 参考 https://maku.blog/p/rdq3ep2/

// const TestDiv = styled.div`
//   width: 100px;
//   height: 100px;
//   color: ${(props): string => props.theme.white};
//   background: ${(props): string => props.theme.white};
// `;

interface PathParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const blogList = await HomeAPI.fetchBlogList();
  const paths = blogList.map((blog) => ({
    params: { slug: blog.id },
  }));
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: GetStaticPropsContext<PathParams>) => {
  const id = context.params?.slug!;
  const blogDetail = await HomeAPI.fetchBlogDetail(id);

  return {
    props: {
      detail: blogDetail,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const BlogDetail: NextPage<Props> = ({ detail }) => {
  return (
    <main>
      <h1>{detail?.title}</h1>
      {/* <p>{detail.publishedAt}</p> */}
      <div
        dangerouslySetInnerHTML={{
          __html: `${detail?.content}`,
        }}
      />
    </main>
  );
};

/** @desc export defaultでないといけなかった。*/
export default BlogDetail;
