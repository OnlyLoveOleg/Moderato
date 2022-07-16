import { ReactElement, useState } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import { Footer, Header } from '@/components/molecules';
import styled from 'styled-components';

// type LayoutProps = Required<{
//   readonly children: ReactElement;
// }>;

type LayoutProps = {
  showFooter?: boolean;
  readonly children: React.ReactNode;
};

const Wrapper = styled.div``;

export const Layout: NextComponentType<NextPageContext, null, LayoutProps> = ({
  showFooter = true,
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const onClickOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const onClickCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // パスが同一であればmenuを閉じる

  const isTopPage = (href: string) => {
    if (router.pathname === href) {
      onClickCloseMenu();
    }
  };

  return (
    <Wrapper>
      <Header onClickMenuButton={() => onClickOpenMenu()}></Header>
      <main>{children}</main>
      {showFooter && <Footer />}
    </Wrapper>
  );
};
