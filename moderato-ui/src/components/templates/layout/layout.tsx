import { useState, useEffect, useRef, WheelEvent } from 'react';
import { NextComponentType, NextPageContext } from 'next';

import { Header, Footer } from '@/components/molecules/common';
import styled from 'styled-components';

const AppGSAP = import('@/libs/animation').then((mod) => new mod.AppGSAP());

type LayoutProps = {
  enableSmoothScroll?: boolean;
  disableRightClick?: boolean; // 右クリックを禁止するか default false
  showFooter?: boolean;
  readonly children: Required<React.ReactNode>;
};

const Wrapper = styled.div`
  width: 100%;

  > .footer {
    height: 100vh;
  }
`;

const MainWrap = styled.main``;

/**
 * @desc 現状考えてる責務
 * 1. スムーススクロールの可否
 * 2. footerが消せる
 */
export const Layout: NextComponentType<NextPageContext, null, LayoutProps> = ({
  enableSmoothScroll = false,
  disableRightClick = false,
  showFooter = true,
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const layoutRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!enableSmoothScroll) {
      return;
    }

    const initSmoothScroll = async () => {
      const gsap = (await AppGSAP).getGSAP;

      const smoothScroll = (toBottom: boolean) => {
        let direction = '-=100';
        if (toBottom) {
          direction = '+=100';
        }
        gsap.to(window, {
          scrollTo: { y: direction, autoKill: true },
          duration: 1.5,
        });
      };

      let startY: number;
      const touchstart = (e: TouchEvent) => {
        startY = e.changedTouches[0].pageY;
      };

      const touchmove = (e: TouchEvent) => {
        e.preventDefault();
        const moveY = e.changedTouches[0].pageY;
        if (moveY < startY) {
          smoothScroll(true);
        } else {
          smoothScroll(false);
        }
      };

      // WheelEventが適用されない（bug?）そのためany追加
      const mousemove = (e: WheelEvent & any) => {
        e.preventDefault();
        if (0 < e.deltaY) {
          smoothScroll(true);
        } else {
          smoothScroll(false);
        }
      };

      document.addEventListener('touchstart', touchstart, { passive: false });
      document.addEventListener('touchmove', touchmove, { passive: false });
      document.addEventListener('mousewheel', mousemove, { passive: false });
    };

    initSmoothScroll();
  }, []);

  return (
    <Wrapper
      className='layout'
      data-testid='layout'
      id='main-container'
      ref={layoutRef}
      onContextMenu={(e) => disableRightClick && e.preventDefault()}
    >
      <Header isOpen={isMenuOpen} onToggleMenu={() => onToggleMenu()} />
      <MainWrap>{children}</MainWrap>
      {showFooter && <Footer className='footer' />}
    </Wrapper>
  );
};
