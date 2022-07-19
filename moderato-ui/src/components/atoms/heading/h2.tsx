import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  text: string;
  size: string;
};

const StyledH2 = styled.h2<Omit<Props, 'text'>>`
  font-size: ${(props) => props.size};
  letter-spacing: 0.05em;
`;

export const H2: NextComponentType<NextPageContext, null, Props> = ({ text, size }) => {
  return <StyledH2 size={size}>{text}</StyledH2>;
};
