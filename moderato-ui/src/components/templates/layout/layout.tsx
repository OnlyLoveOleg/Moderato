import { useState } from 'react';
import { NextComponentType, NextPageContext } from 'next';
// import { useRouter } from 'next/router';

import { Header, Footer } from '@/components/molecules';
import styled from 'styled-components';

type LayoutProps = {
  showFooter?: boolean;
  readonly children: Required<React.ReactNode>;
};

const Wrapper = styled.div`
  width: 100%;
`;

const FooterWrap = styled.div`
  height: 100vh;
`;

const MainWrap = styled.main``;

export const Layout: NextComponentType<NextPageContext, null, LayoutProps> = ({
  showFooter = true,
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const router = useRouter();

  const onToggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  // パスが同一であればmenuを閉じる
  // const isTopPage = (href: string) => {
  //   if (router.pathname === href) {
  //     onClickCloseMenu();
  //   }
  // };

  return (
    <Wrapper className='layout' data-testid='layout'>
      <Header isOpen={isMenuOpen} onToggleMenu={() => onToggleMenu()} />
      <MainWrap>{children}</MainWrap>
      {showFooter && (
        <FooterWrap>
          <Footer />
        </FooterWrap>
      )}
    </Wrapper>
  );
};
