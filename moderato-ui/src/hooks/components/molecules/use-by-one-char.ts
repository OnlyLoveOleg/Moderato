import { useCallback } from 'react';
import { AppGSAP } from '@/libs/animation';
import { byOneChar, scrollByOneChar } from '@/libs/animation/tween';

export const useByOneChar = (id: string, enableScrollTrigger: boolean = false) => {
  /**
   * @desc animation set scrollありかなし
   */
  const setAnimation = (text: string) => {
    const gsap = new AppGSAP().getGSAP;
    const numText = text.length;

    const tween = enableScrollTrigger
      ? scrollByOneChar(gsap, `#${id}`, numText, text)
      : byOneChar(gsap, `#${id}`, numText, text);

    tween.play();
  };

  /**
   * @desc props.childrenの初期化
   *       高さを取得し中身のテキストを取得しメモリに保存。そして元々のテキストを消しgsapへと渡す
   */
  const textRef = useCallback((node: HTMLParagraphElement | null) => {
    if (node !== null) {
      try {
        const text = node.innerHTML; // テキストを読み込む（props.children）
        const height = node.clientHeight; // 高さを取得する
        node.innerHTML = ''; //テキストを削除する（props.children）を空に
        node.style.height = height + 'px'; //高さを設定する
        setAnimation(text);
      } catch (e) {
        console.log('ここでerror');
      }
    }
  }, []);

  return { setAnimation, textRef };
};
