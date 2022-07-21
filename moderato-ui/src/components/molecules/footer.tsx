import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

import { H2 } from '@/components/atoms/heading';

const Wrapper = styled.footer`
  /* height: 100vh; */
  color: ${(props): string => props.theme.descColor};
`;

export const Footer: NextComponentType<NextPageContext, null> = () => {
  return (
    <Wrapper data-testid='footer'>
      <H2 text='WORK CONTACT' size='2rem' />
      <H2 text='NAOHITO-T' size='2rem' />
    </Wrapper>
  );
};
