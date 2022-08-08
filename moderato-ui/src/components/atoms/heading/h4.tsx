import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  className?: string;
  text: string;
  size: string;
};

const StyledH4 = styled.h4<Omit<Props, 'text'>>`
  font-size: ${(props) => props.size};
  letter-spacing: 0.05em;
`;

export const H4: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  text,
  size,
}) => {
  return (
    <StyledH4 className={className} size={size}>
      {text}
    </StyledH4>
  );
};
