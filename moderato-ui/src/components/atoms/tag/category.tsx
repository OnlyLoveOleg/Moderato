import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  className?: string;
  themeColor: string;
  text: string;
};

const Wrapper = styled.span<Omit<Props, 'className' | 'text'>>`
  background: ${(props) => props.themeColor};
  border-radius: 50px;
  cursor: pointer;
  color: #fff;
  font-size: 0.8rem;
  padding: 2px 10px;
  text-transform: uppercase;
  vertical-align: initial; // 何か効いてため初期化
`;

export const Category: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  themeColor,
  text,
}) => {
  return (
    <Wrapper className={className} themeColor={themeColor}>
      {text}
    </Wrapper>
  );
};
