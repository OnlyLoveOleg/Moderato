import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { HomeAPI } from '@/libs/apis';

const TestDiv = styled.div`
  width: 100px;
  height: 100px;
  color: ${(props): string => props.theme.white};
  background: ${(props): string => props.theme.violet022};
`;

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
    <>
      <TestDiv>test</TestDiv>
      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
