import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  className?: string;
  disabled?: boolean;
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
};

const Wrapper = styled.button`
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 3px;
  background: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s ease;
  &:hover {
    background: dodgerblue;
    color: white;
  }
`;

/**
 * @desc 長方形のbutton
 */
export const RectangleButton: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  disabled,
  value,
  children,
  onClick,
}) => {
  return (
    <Wrapper disabled={disabled} value={value} onClick={onClick} className={className}>
      {children}
    </Wrapper>
  );
};
