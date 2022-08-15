import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { useCircleBounce } from '@/composable/components/molecules';

export type CircleBounceType = {
  id: string;
  className?: string;
};

const Wrapper = styled.div`
  color: '#fff';
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: red;
`;

/**
 * @desc y: -200 から y: 0で落ちてくる 丸の無限アニメーション
 */
export const CircleBounce: NextComponentType<NextPageContext, null, CircleBounceType> = ({
  id,
  className = '',
}) => {
  useCircleBounce(id);
  return <Wrapper id={id} className={className} />;
};
