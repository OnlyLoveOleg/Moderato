import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { useByOneChar } from '@/composable/components/molecules';

export type AnimationByOneCharType = {
  children: React.ReactNode;
  id: string;
  className?: string;
  enableScrollTrigger?: boolean;
};

const Wrapper = styled.p`
  color: '#fff';
`;

/**
 * @desc この関数コンポーネントで囲むとchildren textが一文字ずつ出現する
 */
export const AnimationByOneChar: NextComponentType<
  NextPageContext,
  null,
  AnimationByOneCharType
> = ({ children, id, className = '', enableScrollTrigger = false }: AnimationByOneCharType) => {
  const { textRef } = useByOneChar(id, enableScrollTrigger);

  return (
    <Wrapper ref={textRef} id={id} className={className}>
      {children}
    </Wrapper>
  );
};
