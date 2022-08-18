import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';
import { Transition } from '@/components/molecules/card';
import Image from 'next/image';
import { H2 } from '@/components/atoms/heading';
import { displayFlex } from '@/styles/styled-components/global';

type Props = {
  latestBlogs: Blog[];
};

const Wrapper = styled.section`
  height: 100vh;

  .title-wrap {
    ${displayFlex({ flexDirection: 'row', justifyContent: 'flex-start' })};
    width: 100%;
    padding: 1rem;
    background-color: #000; // FIXME: position: absoluteでずらす

    .icon-wrap {
      position: relative;
      width: 48px;
      height: 48px;
    }

    .latest-title {
      color: #fff;
    }
  }

  .card-wrap {
    padding: 1rem;
  }
`;

// @see https://codepen.io/Gelsot/pen/xpGYyd これ作る
export const LatestSection: NextComponentType<NextPageContext, null, Props> = ({ latestBlogs }) => {
  return (
    <Wrapper>
      <div className='title-wrap'>
        <div className='icon-wrap'>
          <Image src='/icon/latest_news.svg' layout='fill' alt='latest' />
        </div>
        <H2 className='latest-title' text='LATEST NEWS' size='2rem' />
      </div>
      <Transition className='card-wrap' blogs={latestBlogs} />
    </Wrapper>
  );
};
