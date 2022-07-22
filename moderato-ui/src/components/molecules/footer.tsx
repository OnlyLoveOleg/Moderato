import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

import { displayFlex } from '@/styles/styled-components/global';
import { H2 } from '@/components/atoms/heading';

const Wrapper = styled.footer`
  height: 100%;
  background-color: ${(props): string => props.theme.black};
  color: ${(props): string => props.theme.descColor};
  ${displayFlex({ justifyContent: 'center', alignItems: 'center' })};
`;

export const Footer: NextComponentType<NextPageContext, null> = () => {
  return (
    <Wrapper data-testid='footer'>
      <H2 text='WORK CONTACT' size='2rem' />
      <H2 text='NAOHITO-T' size='2rem' />
    </Wrapper>
  );
};
