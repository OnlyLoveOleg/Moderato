import { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Blog } from '@/types/model';
import { Props as HsProps } from '@/components/organisms/top/horizontalScroll';

const HorizontalScroll = dynamic<HsProps>(
  () =>
    import('@/components/organisms/top/horizontalScroll').then((module) => module.HorizontalScroll),
  { ssr: false },
);

/** 全体の設定 */
const Wrapper = styled.div`
  width: 100%;
  background: ${(props): string => props.theme.white};
  overflow-x: hidden; // HOMEは横スクロールなどが多いため
`;

const TopSection = styled.section`
  height: 100vh;
  background-image: url('/images/top_section.png');
  background-position: center;
  background-size: cover;
  position: relative;
`;

type TopProps = {
  recommendBlogs: Blog[];
  latestBlogs: Blog[];
  designBlogs: Blog[];
  frontBlogs: Blog[];
  serverBlogs: Blog[];
  infraBlogs: Blog[];
};
// @TODO: パララックス
//        横スクロール
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
      <TopSection></TopSection>
      {/* <RecommendSection recommendBlogs={recommendBlogs} /> */}
      {/* 横スクロール実装する */}
      {/* <HorizontalScroll blogs={designBlogs} /> */}
    </Wrapper>
  );
};
