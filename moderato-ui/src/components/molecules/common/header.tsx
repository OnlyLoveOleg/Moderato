import { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';

import styled from 'styled-components';

import { H1 } from '@/components/atoms/heading';
import { Hamburger } from '@/components/atoms/button';

import { displayFlex } from '@/styles/styled-components/global';
import { CircleBounceType } from '@/components/molecules/animation';

const CircleBounce = dynamic<CircleBounceType>(
  () => import('@/components/molecules/animation').then((module) => module.CircleBounce),
  { ssr: false },
);

type Props = {
  className?: string;
  isOpen: boolean;
  isActive: boolean;
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

  .item {
    ${displayFlex({ justifyContent: 'space-between', flexDirection: 'row' })};
    padding-left: 0.8rem;

    .logo-title {
      color: ${(props) => props.theme.white};
      margin: 0 1rem;
    }
  }

  .hamburger {
    margin: 0 1rem;
  }
`;

export const Header: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  isOpen,
  isActive,
  onToggleMenu,
}) => {
  return (
    <Wrapper className={className} data-testid='header'>
      <ItemWrap>
        <div className='item'>
          <CircleBounce id='circle-bounce' />
          <H1 className='logo-title' text='naohito-T.blog.com' size='2rem' />
        </div>
        <Hamburger
          className='hamburger'
          isOpen={isOpen}
          isActive={isActive}
          onToggleMenu={onToggleMenu}
        />
      </ItemWrap>
    </Wrapper>
  );
};
