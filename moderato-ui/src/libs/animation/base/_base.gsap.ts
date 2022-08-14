import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
// https://devsakaso.com/gsap-non-loop-slider/

/**
 * @desc baseでimportまとめている理由
 *       各コンポーネントでgsapをimportするとbundle sizeが大きくなる。
 */
export abstract class BaseGSAP {
  protected readonly gsap: typeof gsap;

  constructor() {
    /**
     * @desc Pluginを登録してからthis.gsapに入れる必要がある。
     */
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    this.gsap = gsap;
  }
}
