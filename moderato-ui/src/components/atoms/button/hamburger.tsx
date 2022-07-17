import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

const Wrapper = styled.button`
  width: 48px;
  height: 48px;
`;

const Span = styled.span`
  color: #000;
  height: 1px;
`;

type HamburgerProps = {};

export const Hamburger: NextComponentType<NextPageContext, null, HamburgerProps> = () => {
  return (
    <Wrapper>
      <Span />
      <Span />
      <Span />
    </Wrapper>
  );
};
