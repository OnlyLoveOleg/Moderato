import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { pickThumbnail } from '@/composable/helper';
import { H3 } from '@/components/atoms/heading';
import { Paragraph } from '@/components/atoms/text';
import { RectangleButton } from '@/components/atoms/button';
import { displayFlex } from '@/styles/styled-components/global';

type Props = {
  className?: string;
  blogs: Blog[];
};

const Wrapper = styled.div`
  .pickup-card {
    ${displayFlex({ flexDirection: 'row', justifyContent: 'space-between' })}
    margin-bottom: 2rem;

    &-img {
      position: relative;
      height: 400px;
      width: 525px;
    }

    &-desc {
    }
  }

  .card {
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
  const pickUpCard = 0;

  return (
    <Wrapper className={className}>
      {blogs.map((b, i) => {
        return (
          <>
            {i === pickUpCard ? (
              <article className='pickup-card' key={i}>
                <div className='pickup-card-img'>
                  <Image src={pickThumbnail(b)} layout='fill' objectFit='cover' alt={b.title} />
                </div>
                <div className='pickup-card-desc'>
                  <h1>Mssountain</h1>
                  <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                  <button>Read More</button>
                </div>
              </article>
            ) : (
              <div className='card-wrap'>
                <article className='card' key={i}>
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
                    <Link href={`/blog/${b.id}`}>
                      <RectangleButton className='button'>Read More</RectangleButton>
                    </Link>
                  </div>
                </article>
              </div>
            )}
          </>
        );
      })}
    </Wrapper>
  );
};
