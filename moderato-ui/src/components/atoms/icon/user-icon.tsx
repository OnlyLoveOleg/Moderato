import { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { Author } from '@/types/model';

type Props = {
  className?: string;
  author: Author;
  height: string;
  width: string;
};

const Wrapper = styled.div<Omit<Props, 'className' | 'author'>>`
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  .icon {
    border-radius: 50%;
  }
`;

/**
 * @desc 丸い縁の中に指定の画像をはめる（size指定可能）
 */
export const UserIcon: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  author,
  height,
  width,
}) => {
  return (
    <Wrapper className={className} height={height} width={width}>
      <Image
        className='icon'
        src={author.image.url}
        alt={author.name}
        layout='fill'
        objectFit='cover'
      />
    </Wrapper>
  );
};
