import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { pickThumbnail } from '@/hooks/helper';

type Props = {
  className?: string;
  blogs: Blog[];
};

const Wrapper = styled.article`
  height: 100%;
  width: 30%;
  /** TODO: media 4 → 1 or 2?*/

  .card-header {
    position: relative;
    width: 100%;
    height: 300px;
    cursor: pointer;
  }
`;

export const Recommend: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  blogs,
}) => {
  return (
    <>
      {blogs.map((b) => {
        return (
          <Wrapper className={`card ${className}`} key={b.id}>
            {/* image */}
            <Link href={`/blogs/${b.id}`} passHref>
              <div className='card-header'>
                <Image src={pickThumbnail(b)} layout='fill' objectFit='cover' alt='rover' />
              </div>
            </Link>
            {/* category */}
            <div>
              <div></div>
              <p>{b.title}</p>
              <p>{b.subTitle}</p>
            </div>
          </Wrapper>
        );
      })}
    </>
  );
};
