import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
// import Link from 'next/link';

import { HomeAPI } from '@/libs/apis';

// これは、ビルド時にサーバー側で呼ばれる関数です。この部分の処理は最終的にバンドルJSに含まれません。
// ビルド時にデータを取得し、静的なHTMLを出力するために必要です。
export const getStaticProps = async (context: GetStaticPropsContext) => {
  console.log(context);
  const blog = await HomeAPI.fetchBlogList();

  return {
    props: {
      blog,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const About: NextPage<Props> = () => {
  return (
    <div>
      <ul>
        {/* {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default About;
