import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
// import dynamic from 'next/dynamic';
// import { Props as HsProps } from '@/components/organisms/top/horizontalScroll';

import { Blog } from '@/types/model';

// const HorizontalScroll = dynamic<HsProps>(
//   () =>
//     import('@/components/organisms/top/horizontalScroll').then((module) => module.HorizontalScroll),
//   { ssr: false },
// );

import { RecommendSection, AboutSection, LatestSection } from '@/components/organisms/top';

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
  margin-bottom: 300px;
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
export const Top: NextComponentType<NextPageContext, null, TopProps> = ({
  recommendBlogs,
  latestBlogs,
  // designBlogs,
  // frontBlogs,
  // serverBlogs,
  // infraBlogs,
}) => {
  return (
    <Wrapper data-testid='top-tpl'>
      <TopSection>
        <RecommendSection recommendBlogs={recommendBlogs} />
      </TopSection>
      <AboutSection />
      <LatestSection latestBlogs={latestBlogs} />
      {/* 横スクロール実装する */}
      {/* <HorizontalScroll blogs={designBlogs} /> */}
    </Wrapper>
  );
};
