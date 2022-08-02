import { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';
const AppGSAP = import('@/libs/animation').then((mod) => new mod.AppGSAP());

export type Props = {
  blogs: Blog[];
};

const Wrapper = styled.section`
  .section {
    width: 100%;
    padding: 100px 0;
  }
  .container {
    width: 80%;
    max-width: 900px;
    margin: 0 auto;
  }

  .heading {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  /* タイトル */
  .title {
    padding: 200px 0 20px;
    font-size: 52px;
    text-align: center;
  }

  /* 普通のセクション */
  .normal-text {
    font-size: 20px;
    letter-spacing: 0.08em;
    margin-top: 60px;
  }

  /* 横スクロールセクション */
  .side-scroll {
    background-color: #1b1717;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .side-scroll-heading {
    color: #eeebdd;
  }

  .side-scroll-list-wrapper {
    position: relative;
    width: 100%;
    height: 700px;
  }

  .side-scroll-list {
    position: absolute;
    top: 60px;
    left: 0;
    display: flex;
    gap: 0 60px;
  }

  .side-scroll-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 420px;
    background-color: #eeebdd;
    color: #1b1717;
    font-size: 32px;
    font-weight: 700;
  }

  .side-scroll-item + .side-scroll-item {
    margin-left: 60px;
  }
`;

export const HorizontalScroll: NextComponentType<NextPageContext, null, Props> = ({ blogs }) => {
  useEffect(() => {
    const init = async () => {
      const gsap = (await AppGSAP).getGSAP;
      const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
      const listEl = document.querySelector('.side-scroll-list');

      if (listEl && listWrapperEl) {
        console.log(`end の値+=${listEl.clientWidth - listWrapperEl.clientWidth}`);
        console.log(`xPercentの値${-(listEl.clientWidth - listWrapperEl.clientWidth)}`);
        gsap.to(listEl, {
          // x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
          xPercent: -2400,
          ease: 'none',
          scrollTrigger: {
            trigger: '.side-scroll',
            start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
            end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
            // end: `+=2400`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    };

    init();
  }, []);

  return (
    <Wrapper data-testid='horizontal-scroll'>
      <h1 className='title'>GSAP Pinning Side Scroll</h1>
      <section className='normal section'>
        <div className='container'>
          <h2 className='normal-heading heading'>普通のセクション</h2>
          <p className='normal-text'>
            テキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよ
          </p>
        </div>
      </section>

      <section className='side-scroll section'>
        <div className='side-scroll-container container'>
          <h2 className='side-scroll-heading heading'>横にスクロールするセクション</h2>
          <div className='side-scroll-list-wrapper'>
            <ul className='side-scroll-list'>
              <li className='side-scroll-item'>Card</li>
              <li className='side-scroll-item'>Card</li>
              <li className='side-scroll-item'>Card</li>
              <li className='side-scroll-item'>Card</li>
              <li className='side-scroll-item'>Card</li>
              <li className='side-scroll-item'>Card</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='normal section'>
        <div className='container'>
          <h2 className='normal-heading heading'>普通のセクション</h2>
          <p className='normal-text'>
            テキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよ
          </p>
        </div>
      </section>
    </Wrapper>
  );
};
