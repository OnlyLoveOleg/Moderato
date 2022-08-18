import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { pickThumbnail } from '@/composable/helper';
import { H3 } from '@/components/atoms/heading';
import { Paragraph } from '@/components/atoms/text';
import { RectangleButton } from '@/components/atoms/button';

type Props = {
  className?: string;
  blogs: Blog[];
};

const Wrapper = styled.article`
  .card {
    width: 280px;
    height: 360px;
    border-radius: 15px;
    padding: 1.5rem;
    background: white;
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: 0.4s ease-out;
    box-shadow: 0px 7px 10px rgba(black, 0.5);

    &:hover {
      transform: translateY(20px);
      &:before {
        opacity: 1;
      }
      .info {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      background: rgba(0, 0, 0, 0.6);
      z-index: 2;
      transition: 0.5s;
      opacity: 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 15px;
    }
    .info {
      position: relative;
      z-index: 3;
      color: white;
      opacity: 0;
      transform: translateY(30px);
      transition: 0.5s;

      &-title {
        margin-bottom: 0.2rem;
      }

      /* p {
        letter-spacing: 1px;
        font-size: 15px;
        margin-top: 8px;
      } */
    }
  }
`;

/**
 * @desc before hover → image only
 *       after hover → image set title with desc
 */
export const Transition: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  blogs,
}) => {
  return (
    <>
      {blogs.map((b, i) => {
        return (
          <Wrapper className={`card ${className}`} key={i}>
            <Image
              className='card-image'
              src={pickThumbnail(b)}
              layout='fill'
              objectFit='cover'
              alt={b.title}
            />
            <div className='info'>
              <H3 className='info-title' text={b.title} size='1rem' />
              <Paragraph text={b.subTitle} size='0.5rem' />
              <Link href={b.id} passHref>
                <RectangleButton className='button'>Read More</RectangleButton>
              </Link>
            </div>
          </Wrapper>
        );
      })}
    </>
  );
};
