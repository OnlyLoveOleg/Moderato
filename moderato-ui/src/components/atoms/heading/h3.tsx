import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  text: string;
  size: string;
};

const StyledH3 = styled.h3<Omit<Props, 'text'>>`
  font-size: ${(props) => props.size};
  letter-spacing: 0.05em;
`;

export const H3: NextComponentType<NextPageContext, null, Props> = ({ text, size }) => {
  return <StyledH3 size={size}>{text}</StyledH3>;
};
