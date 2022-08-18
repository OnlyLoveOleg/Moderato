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

  .main {
    width: 100%;
    display: flex;

    &-section {
      flex-grow: 2;
    }

    &-toc {
      flex-grow: 1;
    }
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
      <div className='main'>
        <MainSection className='main-section' blogDetail={blogDetail} />
        {blogDetail.tocVisible && <TableContents className='main-toc' toc={toc} />}
      </div>
      <RelatedSection className='related-section' blogs={sameCategoryBlogs} />
    </Wrapper>
  );
};
