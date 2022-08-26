import { useEffect } from 'react';
import { AppGSAP } from '@/libs/animation';
import { expoInFromBottom } from '@/libs/animation/tween';

export const useFooter = (id: string) => {
  useEffect(() => {
    const gsap = new AppGSAP().getGSAP;
    AppGSAP.setAlpha(gsap, `#${id}`, { y: 300 });
    expoInFromBottom(gsap, id).play();
  }, []);
};
