import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

import { Blog } from '@/types/model';

const Wrapper = styled.div``;

const TestDiv = styled.div`
  width: 100px;
  height: 100px;
  color: ${(props): string => props.theme.white};
  background: ${(props): string => props.theme.violet022};
`;

type TopProps = {
  recommendBlogs: Blog[];
  latestBlogs: Blog[];
  designBlogs: Blog[];
  frontBlogs: Blog[];
  serverBlogs: Blog[];
  infraBlogs: Blog[];
};

export const Top: NextComponentType<NextPageContext, null, TopProps> = ({
  recommendBlogs,
  latestBlogs,
  designBlogs,
  frontBlogs,
  serverBlogs,
  infraBlogs,
}) => {
  return (
    <Wrapper>
      <TestDiv>test</TestDiv>
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
