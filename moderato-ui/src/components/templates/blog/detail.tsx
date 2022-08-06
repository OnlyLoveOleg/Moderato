import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';
import { TopSection, MainSection, RelatedSection } from '@/components/organisms/blog/detail';
import { DefBlogToImg } from '@/config';

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
  /** undefinedであればそのブログのカテゴリーからdefault画像を返す */
  const pickThumbnail = (blog: Blog): string => {
    const thumbnail = blog.thumbnail?.url ?? blog.category.name;
    switch (thumbnail) {
      case 'design':
        return DefBlogToImg.design;
      case 'front':
        return DefBlogToImg.front;
      case 'server':
        return DefBlogToImg.server;
      case 'infra':
        return DefBlogToImg.infra;
      default:
        return thumbnail;
    }
  };

  return (
    <Wrapper data-testid='blog-detail-tpl'>
      <TopSection title={blogDetail.title} thumbnail={pickThumbnail(blogDetail)} />
      {/* section content */}
      <MainSection blogDetail={blogDetail} />
      {/* section footer */}
      <RelatedSection blogs={sameCategoryBlogs} />
    </Wrapper>
  );
};
