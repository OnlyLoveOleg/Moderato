/**
 * time-remap
 * タイムリマップとは
 * @see https://ics.media/entry/7162/
 */

// const tl = gsap.timeline({ repeat: -1 });
// // 右側に2秒かけて移動するモーションを指定する
// tl.add(gsap.to('#rect', { x: 800, rotate: 360, duration: 2 }));
// // 本来のタイムラインの0.25秒の地点まで到達したら
// tl.call(
//   () => {
//     // 0.1倍速再生にする(スローモーションとなる)
//     tl.timeScale(0.1);
//   },
//   undefined,
//   0.25,
// );
// // 本来のタイムラインの0.50秒の地点まで到達したら
// tl.call(
//   () => {
//     // 1.0倍速再生にする(通常再生速度となる)
//     tl.timeScale(1.0);
//   },
//   undefined,
//   0.5,
// );

/**
 * @desc 指定された要素が順番にアニメーションされる。
 */
export const sequentialAnimation = (gsap: GSAP, el: string) => {
  const tween = gsap.to(el, {
    delay: 1,
    duration: 1.5,
    y: -10, // 少し上に移動させる
    opacity: 1,
    ease: 'power2.out',
    // 複数要素を扱うプロパティ
    stagger: {
      from: 'start', //左側から
      amount: 0.8, // 0.8秒おきに
    },
  });

  return tween;
};
