import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { HomeAPI } from '@/libs/apis';

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

const Home: NextPage<Props> = ({ blog }) => {
  return (
    <div>
      <ul>
        {blog.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
