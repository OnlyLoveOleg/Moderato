import { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { H2 } from '@/components/atoms/heading';
import styled from 'styled-components';
import { handlerFadeDirection } from '@/composable/helper';
import { domSelect } from '@/utils/dom';
import { AppGSAP } from '@/libs/animation';
import { displayFlex } from '@/styles/styled-components/global';

export type FadeInH2Types = {
  className?: string;
  text: string;
  direction?: string;
  delay?: number;
  size?: string;
};

const Wrapper = styled.div`
  ${displayFlex({})};

  .title {
    color: #fff;
  }
`;
// forward ref 問題
// @see https://www.gaji.jp/blog/2021/01/08/6247/
export const FadeInH2: NextComponentType<NextPageContext, null, FadeInH2Types> = ({
  className = '',
  text,
  size = '2rem',
  direction = '',
  delay = 1,
}) => {
  useEffect(() => {
    const loadGSAP = async () => {
      const dom = domSelect('.fade');
      const param = handlerFadeDirection(direction, 100);

      const gsap = new AppGSAP().getGSAP;
      AppGSAP.setAlpha(gsap, '.fade');

      await gsap.to(dom, {
        ...param,
        duration: 1, // アニメーションの再生時間を指定
        autoAlpha: 1,
        delay, // アニメーション開始までの遅延時間を秒数の単位で指定
        scrollTrigger: {
          trigger: dom,
          toggleActions: 'play reset resume reset',
          start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
          end: 'bottom+=200 top',
          fastScrollEnd: true,
          markers: true,
        },
      });
    };
    loadGSAP();
  }, []);

  return (
    <Wrapper className={`fade ${className}`}>
      <H2 className='title' size={size} text={text} />
    </Wrapper>
  );
};
