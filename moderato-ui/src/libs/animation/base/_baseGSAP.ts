import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export abstract class BaseGSAP {
  protected readonly gsap: typeof gsap;

  /**
   * @desc Pluginを登録してからthis.gsapに入れる必要がある。
   */
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    this.gsap = gsap;
  }
}
