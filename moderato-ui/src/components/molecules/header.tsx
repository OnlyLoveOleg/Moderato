import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

import { Hamburger } from '@/components/atoms/button';

type Props = {
  className?: string;
  onClickMenuButton: () => void;
};

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  background: transparent;
  z-index: 10;
`;

const ItemWrap = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
`;

export const Header: NextComponentType<NextPageContext, null, Props> = () => {
  return (
    <Wrapper>
      <ItemWrap>
        <Title>naohito-T.blog.com</Title>
        <Hamburger />
      </ItemWrap>
    </Wrapper>
  );
};
