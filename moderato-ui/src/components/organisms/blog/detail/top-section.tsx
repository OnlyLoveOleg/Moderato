import { NextComponentType, NextPageContext } from 'next';
import { H1 } from '@/components/atoms/heading';
import styled from 'styled-components';
import { displayFlex } from '@/styles/styled-components/global';

type Props = {
  className?: string;
  title: string;
  thumbnail: string;
};

const Wrapper = styled.section<Omit<Props, 'title'>>`
  ${displayFlex({})};
  height: 100vh;
  background-image: url(${(props) => props.thumbnail});
  background-position: center;
  background-size: cover;
  position: relative;

  > .top-title {
    color: #fff;
  }
`;

/**
 * @desc blog/slug top section
 * TODO サムネイルがトップセクションに配置される。
 */
export const TopSection: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  title,
  thumbnail,
}) => {
  return (
    <Wrapper className={className} thumbnail={thumbnail}>
      <H1 className='top-title' text={title} size='3rem' />
    </Wrapper>
  );
};
