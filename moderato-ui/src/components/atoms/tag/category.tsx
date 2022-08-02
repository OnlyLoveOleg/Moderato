import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  className?: string;
  text: string;
};

const Wrapper = styled.div`
  background-color: #47bcd4;
  border-radius: 50%;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Category: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  text,
}) => {
  return <Wrapper className={className}>{text}</Wrapper>;
};
