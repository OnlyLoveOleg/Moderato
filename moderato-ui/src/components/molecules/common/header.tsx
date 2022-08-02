import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

import { H1 } from '@/components/atoms/heading';
import { Hamburger } from '@/components/atoms/button';

import { displayFlex } from '@/styles/styled-components/global';

type Props = {
  className?: string;
  isOpen: boolean;
  onToggleMenu: () => void;
};

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  background: transparent;
  z-index: 10;
  user-select: none;
`;

const ItemWrap = styled.div`
  ${displayFlex({ justifyContent: 'space-between', flexDirection: 'row' })};
  height: 100%;

  .logo-title {
    color: ${(props) => props.theme.white};
    margin: 0 1rem;
  }

  .hamburger {
    margin: 0 1rem;
  }
`;

export const Header: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  isOpen,
  onToggleMenu,
}) => {
  return (
    <Wrapper className={className} data-testid='header'>
      <ItemWrap>
        <H1 className='logo-title' text='naohito-T.blog.com' size='2rem' />
        <Hamburger className='hamburger' isOpen={isOpen} onToggleMenu={onToggleMenu} />
      </ItemWrap>
    </Wrapper>
  );
};
