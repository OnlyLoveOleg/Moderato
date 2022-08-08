interface FadeInType {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  fadeTransition: number;
  duration: number;
  trigger: string;
  end: string;
}

/**
 * @desc fade関連のeffect
 * @see https://devsakaso.com/gsap-scrolltrigger-timing/
 */

export const fadeInFromLeft = (gsap: GSAP) => {
  gsap.registerEffect({
    name: 'fadeInFromLeft',
    effect: (target: string, config: FadeInType) => {
      return gsap.to(target, {
        left: config.fadeTransition,
        autoAlpha: 1,
        duration: config.duration,
        scrollTrigger: {
          trigger: config.trigger,
          toggleActions: 'play reset resume reset',
          start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
          end: config.end,
          invalidateOnRefresh: true,
        },
      });
    },
    /** defaultでconfigに渡せる */
    defaults: { fadeTransition: 100, duration: 1, end: '+=500' },
  });
};
