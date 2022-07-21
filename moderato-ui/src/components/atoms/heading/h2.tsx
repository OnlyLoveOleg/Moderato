import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  className?: string; // 親でstyleを当てれるようにするため
  text: string;
  size: string;
};

const StyledH2 = styled.h2<Omit<Props, 'text'>>`
  font-size: ${(props) => props.size};
  letter-spacing: 0.05em;
`;

export const H2: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  text,
  size,
}) => {
  return (
    <StyledH2 className={className} size={size}>
      {text}
    </StyledH2>
  );
};
