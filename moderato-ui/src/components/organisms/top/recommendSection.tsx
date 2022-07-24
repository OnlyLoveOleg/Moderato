import { NextComponentType, NextPageContext } from 'next';

import { Blog } from '@/types/model';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

type Props = {
  recommendBlogs: Blog[];
};

const Wrapper = styled.div`
  background-color: transparent;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;

  .swiper {
    overflow: hidden;
  }
`;

export const RecommendSection: NextComponentType<NextPageContext, null, Props> = ({
  recommendBlogs,
}) => {
  return (
    <Wrapper>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        {recommendBlogs.map((blog, index) => (
          <SwiperSlide key={index}>{`${blog}${index}`}</SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};
