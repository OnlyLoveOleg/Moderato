import { BaseGSAP } from '@/libs/animation/base';

export class AppGSAP extends BaseGSAP {
  public get getGSAP(): GSAP {
    return this.gsap;
  }

  /**
   * @desc 初期状態としてopacity: 0;とvisibility: hidden;が指定される
   * @use  to methodで autoAlpha: 1で表示させる。
   */
  public static setAlpha = (
    g: GSAP,
    sel: gsap.TweenTarget,
    op?: gsap.TweenVars,
  ): gsap.core.Tween => {
    return g.set(sel, { autoAlpha: 0, ...op });
  };
}
