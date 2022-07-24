import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  className?: string;
  text: string;
  size: string;
};

const StyledH3 = styled.h3<Omit<Props, 'text'>>`
  font-size: ${(props) => props.size};
  letter-spacing: 0.05em;
`;

export const H3: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  text,
  size,
}) => {
  return (
    <StyledH3 className={className} size={size}>
      {text}
    </StyledH3>
  );
};
