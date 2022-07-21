import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

import { Blog } from '@/types/model';

/** 全体の設定 */
const Wrapper = styled.div`
  width: 100%;
  background: ${(props): string => props.theme.white};
`;

const TopSection = styled.section`
  height: 100vh;
  background-image: url('/images/top_section.png');
  background-position: center;
  background-size: cover;
`;

type TopProps = {
  recommendBlogs: Blog[];
  latestBlogs: Blog[];
  designBlogs: Blog[];
  frontBlogs: Blog[];
  serverBlogs: Blog[];
  infraBlogs: Blog[];
};

export const Top: NextComponentType<NextPageContext, null, TopProps> = (
  {
    // recommendBlogs,
    // latestBlogs,
    // designBlogs,
    // frontBlogs,
    // serverBlogs,
    // infraBlogs,
  },
) => {
  return (
    <Wrapper>
      <TopSection />
      <p>Top 画面</p>
      {/* <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </Wrapper>
  );
};
