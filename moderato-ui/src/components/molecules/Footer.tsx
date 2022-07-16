import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

const StyledFooter = styled.footer``;

export const Footer: NextComponentType<NextPageContext, null, null> = () => {
  return <StyledFooter></StyledFooter>;
};
