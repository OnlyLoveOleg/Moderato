import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';

type Props = {
  className?: string;
  blogDetail: Blog;
};

const Wrapper = styled.section`
  margin-bottom: 20px;
`;

/** 全体の設定 */
export const MainSection: NextComponentType<NextPageContext, null, Props> = ({ blogDetail }) => {
  console.log(`blogDetail${blogDetail.content}`);
  return (
    <Wrapper>
      <h1>{blogDetail?.title}</h1>
      {/* <p>{detail.publishedAt}</p> */}
      <div
        dangerouslySetInnerHTML={{
          __html: `${blogDetail?.content}`,
        }}
      />
    </Wrapper>
  );
};
