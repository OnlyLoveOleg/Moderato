export {};
// import { useRef, useEffect, ForwardedRef, forwardRef } from 'react';
// import { NextComponentType, NextPageContext } from 'next';
// import { gsap } from 'gsap';
// import styled from 'styled-components';

// type Props = {
//   readonly children?: Required<React.ReactNode>;
//   tag: 'div' | 'h2';
//   direction?: string;
//   delay?: number;
//   ref: ForwardedRef<null>;
// };

// // tagが動的
// const Wrapper = forwardRef<any>(function DynamicTag(props: any, ref) {
//   const Container = styled(props.tag)`
//     background-color: red;
//   `;
//   return <Container ref={ref}>{props.children}</Container>;
// });

// /**
//  * @desc 囲むだけで要素がfadeInする
//  */

// export const FadeInAnimation: NextComponentType<NextPageContext, null, Props> = ({
//   children,
//   tag,
//   direction = '',
//   delay = 0,
// }) => {
//   type Index = 'x' | 'y';
//   // 意味: 距離
//   const compRef = useRef(null);
//   const distance = 200;
//   let fadeDirection: { [k in Index]?: number };

//   switch (direction) {
//     case 'left':
//       fadeDirection = { x: -distance };
//       break;
//     case 'right':
//       fadeDirection = { x: distance };
//       break;
//     case 'up':
//       fadeDirection = { y: distance };
//       break;
//     case 'down':
//       fadeDirection = { y: -distance };
//       break;
//     default:
//       fadeDirection = { x: 0 };
//   }

//   useEffect(() => {
//     gsap.from(compRef.current, {
//       ...fadeDirection,
//       duration: 1,
//       opacity: 0,
//       delay,
//     });
//   }, [compRef, fadeDirection, delay]);

//   return (
//     <Wrapper tag={tag} ref={compRef}>
//       {children}
//     </Wrapper>
//   );
// };
