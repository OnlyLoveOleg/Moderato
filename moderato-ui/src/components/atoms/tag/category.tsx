import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  className?: string;
  text: string;
};

const Wrapper = styled.span`
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;

  .tag-teal {
    background-color: #47bcd4;
  }
  .tag-purple {
    background-color: #5e76bf;
  }
  .tag-pink {
    background-color: #cd5b9f;
  }
`;

export const Category: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  text,
}) => {
  return <Wrapper className={className}>{text}</Wrapper>;
};
