import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  className?: string;
  text: string;
  size: string;
};

const StyledH5 = styled.h5<Omit<Props, 'text'>>`
  font-size: ${(props) => props.size};
  letter-spacing: 0.05em;
`;

export const H5: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  text,
  size,
}) => {
  return (
    <StyledH5 className={className} size={size}>
      {text}
    </StyledH5>
  );
};
