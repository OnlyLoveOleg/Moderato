import { NextComponentType, NextPageContext } from 'next';

import { Blog } from '@/types/model';
import styled from 'styled-components';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
import { Recommend } from '@/components/molecules/card';
import { posLowLeft, displayFlex } from '@/styles/styled-components/global';

type Props = {
  recommendBlogs: Blog[];
};

const Wrapper = styled.section`
  ${posLowLeft({ bottom: '-25%' })};
  ${displayFlex({
    justifyContent: 'space-evenly',
    alignItems: 'flex-start;',
    flexDirection: 'row',
  })};
  height: 50vh;
  width: 100%;
  background-color: transparent;
  z-index: 1;
  /* .swiper {
    overflow: hidden;
  } */
`;

export const RecommendSection: NextComponentType<NextPageContext, null, Props> = ({
  recommendBlogs,
}) => {
  return (
    <Wrapper>
      <Recommend blogs={recommendBlogs} />
      {/* <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        {recommendBlogs.map((blog, index) => (
          <SwiperSlide key={index}>{`${blog}${index}`}</SwiperSlide>
        ))}
      </Swiper> */}
    </Wrapper>
  );
};
