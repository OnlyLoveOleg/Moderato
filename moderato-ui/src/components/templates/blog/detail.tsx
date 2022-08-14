import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';
import { TopSection, MainSection, RelatedSection } from '@/components/organisms/blog/detail';
import { pickThumbnail } from '@/composable/helper';
import { TableOfContentsType } from '@/libs/parser';
import { TableContents } from '@/components/molecules/common';

type Props = {
  className?: string;
  blogDetail: Blog;
  sameCategoryBlogs: Blog[];
  toc: TableOfContentsType[];
};

const Wrapper = styled.div`
  .related-section {
    margin-bottom: 50px;
  }

  .main-section {
  }
`;

/** 全体の設定 */
export const Detail: NextComponentType<NextPageContext, null, Props> = ({
  blogDetail,
  sameCategoryBlogs,
  toc,
}) => {
  return (
    <Wrapper data-testid='blog-detail-tpl'>
      <TopSection title={blogDetail.title} thumbnail={pickThumbnail(blogDetail)} />
      {/* section content */}
      <MainSection className='main-section' blogDetail={blogDetail} />
      {/* aside content */}
      <TableContents toc={toc} />
      {/* section footer */}
      <RelatedSection className='related-section' blogs={sameCategoryBlogs} />
    </Wrapper>
  );
};
