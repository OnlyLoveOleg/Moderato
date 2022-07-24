import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

export type Props = {
  className?: string;
  height?: string;
  width?: string;
  color?: string;
};

const StyledVertical = styled.div<Required<Props>>``;

/**
 * @desc 責務として縦にラインを作るだけ
 *       長さ/幅/色 → props
 *       位置 → 親で指定
 */
export const Vertical: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  height = '1px',
  width = '1px',
  color = '#fff',
}) => {
  return (
    <StyledVertical
      className={className}
      height={height}
      width={width}
      color={color}
    ></StyledVertical>
  );
};
