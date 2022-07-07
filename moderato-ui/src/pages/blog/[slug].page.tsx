import { NextPage, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { HomeAPI } from '@/libs/apis';
import { ParsedUrlQuery } from 'node:querystring';

// 静的生成のためのパスを指定します
// Next.js側ではブログのidを知り得ないため、事前に生成するべきHTMLのパスが分かりません。
// そこでこの関数内でデータを取得し、パスを定義してあげる必要があります。
// ここでのパスはmicroCMSのコンテンツIDです。
// blogの量が多くなるとbuildに時間がかかるのでは？

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths = async () => {
  const blogList = await HomeAPI.fetchBlogList();

  const paths = blogList.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: GetStaticPropsContext<Params>) => {
  const { params } = context;

  // const blog = await HomeAPI.fetchBlog(params?.id);
  const blog = await HomeAPI.fetchBlog('bg5zyeth_2k');

  return {
    props: {
      blog,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const BlogDetail: NextPage<Props> = ({ blog }) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      {/* <p>{blog.publishedAt}</p> */}
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
  );
};

/**
 * export defaultでないといけなかった。
 */
export default BlogDetail;
