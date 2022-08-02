import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';
import { TopSection, MainSection, RelatedSection } from '@/components/organisms/blog/detail';

type Props = {
  className?: string;
  blogDetail: Blog;
  sameCategoryBlogs: Blog[];
};

const Wrapper = styled.div``;

/** 全体の設定 */
export const Detail: NextComponentType<NextPageContext, null, Props> = ({
  blogDetail,
  sameCategoryBlogs,
}) => {
  return (
    <Wrapper>
      <TopSection title={blogDetail.title} thumbnail={blogDetail.thumbnail.url} />
      {/* section content */}
      <MainSection blogDetail={blogDetail} />
      {/* section footer */}
      <RelatedSection blogs={sameCategoryBlogs} />
    </Wrapper>
  );
};
