import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';
import { TopSection, MainSection, RelatedSection } from '@/components/organisms/blog/detail';
import { pickThumbnail } from '@/composable/helper';

type Props = {
  className?: string;
  blogDetail: Blog;
  sameCategoryBlogs: Blog[];
};

const Wrapper = styled.div`
  .related-section {
    margin-bottom: 50px;
  }
`;

/** 全体の設定 */
export const Detail: NextComponentType<NextPageContext, null, Props> = ({
  blogDetail,
  sameCategoryBlogs,
}) => {
  return (
    <Wrapper data-testid='blog-detail-tpl'>
      <TopSection title={blogDetail.title} thumbnail={pickThumbnail(blogDetail)} />
      {/* section content */}
      <MainSection blogDetail={blogDetail} />
      {/* section footer */}
      <RelatedSection className='related-section' blogs={sameCategoryBlogs} />
    </Wrapper>
  );
};
