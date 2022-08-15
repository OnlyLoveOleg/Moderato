import { useEffect } from 'react';
import { AppGSAP } from '@/libs/animation';
import { bounceRepeat } from '@/libs/animation/tween';

export const useCircleBounce = (id: string) => {
  useEffect(() => {
    const gsap = new AppGSAP().getGSAP;
    AppGSAP.setAlpha(gsap, `#${id}`, { y: -200 });
    bounceRepeat(gsap, id).play();
  }, []);
};


