import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  className?: string;
  text: string;
  size: string;
};

const Wrapper = styled.p<Omit<Props, 'className' | 'text'>>`
  font-size: ${(props) => props.size};
  letter-spacing: 0.05em;
`;

export const Paragraph: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  text,
  size,
}) => {
  return (
    <Wrapper className={className} size={size}>
      {text}
    </Wrapper>
  );
};
