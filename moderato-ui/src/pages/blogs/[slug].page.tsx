import { NextPage, GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import { HomeAPI } from '@/libs/apis';
import { Detail as DetailTpl, Layout } from '@/components/templates';

import 'highlight.js/styles/hybrid.css';
import { convertHighlight, extractHeading } from '@/libs/parser';

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
  /** 同カテゴリのblog */
  const blogDetail = await HomeAPI.fetchBlogDetail(id);
  blogDetail.content = convertHighlight(blogDetail.content);
  const toc = extractHeading(blogDetail.content);
  const sameCategoryBlogs = await HomeAPI.fetchSameCategoryBlogList(blogDetail.category.id);

  return {
    props: {
      blogDetail,
      sameCategoryBlogs,
      toc,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const BlogDetail: NextPage<Props> = ({ blogDetail, sameCategoryBlogs, toc }) => {
  return (
    <Layout showFooter={true} disableRightClick={true}>
      <DetailTpl blogDetail={blogDetail} sameCategoryBlogs={sameCategoryBlogs} toc={toc} />
    </Layout>
  );
};

export default BlogDetail;
