import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import Link from 'next/link';

const Button = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  z-index: 10;

  > span {
    width: 100%;
    height: 1px;
    background-color: #fff;
    position: relative;
    transition: ease 0.4s;
    display: block;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      margin: 8px 0;
    }

    &:nth-child(2) {
      top: 0;
    }
  }
`;

const Nav = styled.nav`
  transition: all 250ms ease-out;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  transform: translateX(100%);
  background-color: #000;
  transition: ease 0.4s;

  &.open {
    transform: translateX(0);
  }

  .nav-items {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    list-style: none;
  }

  .nav-items li.active {
    color: #bcac32;
  }
`;

type HamburgerProps = {
  className?: string;
  isOpen: boolean;
  isActive: boolean;
  onToggleMenu: () => void;
};

export const Hamburger: NextComponentType<NextPageContext, null, HamburgerProps> = ({
  className = '',
  isOpen,
  isActive,
  onToggleMenu,
}) => {
  return (
    <>
      <Nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className='nav-items'>
          <Link href={'/'} passHref>
            <a>
              <li className={`${isActive ? 'active' : ''}`}>HOME</li>
            </a>
          </Link>
          {/* blog 一覧はまた今度 */}
          {/* <li>BLOG</li> */}
          <Link href={'/category'} passHref>
            <a>
              <li className={`${isActive ? 'active' : ''}`}>CATEGORY</li>
            </a>
          </Link>
          <Link href={'/about'} passHref>
            <a>
              <li className={`${isActive ? 'active' : ''}`}>ABOUT</li>
            </a>
          </Link>
        </ul>
      </Nav>
      <Button className={className} onClick={onToggleMenu} data-testid='hamburger'>
        <span></span>
        <span></span>
        <span></span>
      </Button>
    </>
  );
};
