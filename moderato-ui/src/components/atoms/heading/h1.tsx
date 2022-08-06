import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

export type Props = {
  className?: string; // 親でstyleを当てれるようにするため
  text: string;
  size: string;
};

const StyledH1 = styled.h1<Omit<Props, 'text'>>`
  font-size: ${(props) => props.size};
  letter-spacing: 0.05em;
`;

export const H1: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  text,
  size,
}) => {
  return (
    <StyledH1 className={className} size={size}>
      {text}
    </StyledH1>
  );
};
