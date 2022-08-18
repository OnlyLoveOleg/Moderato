import { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { Tag } from '@/types/model';

type Props = {
  className?: string;
  tags: Tag[];
};

const ImageStyled = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  margin: 7px 5px 0 5px;
  padding: 0.5rem;
`;

const SpanStyled = styled.span`
  cursor: pointer;
  font-size: 0.8rem;
  color: #2b2c30;
`;

/**
 * @desc tag name 押下するとそのタグのブログ一覧に飛ぶ
 */
export const IconTag: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  tags,
}) => {
  return (
    <>
      {tags.map((t) => {
        return (
          <>
            <ImageStyled className={className}>
              <Image
                className='icon'
                src='/icon/tag_icon.svg'
                alt='icon'
                layout='fill'
                objectFit='cover'
              />
            </ImageStyled>
            <Link href={`/tags/${t.id}`} key={t.id}>
              <a>
                <SpanStyled>{t.name}</SpanStyled>
              </a>
            </Link>
          </>
        );
      })}
    </>
  );
};
