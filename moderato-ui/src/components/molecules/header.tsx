import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

import { Button } from '@/components/atoms';

type Props = {
  className?: string;
  onClickMenuButton: () => void;
};

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  background: ${(props): string => props.theme.gradationPink01};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 5.7%;
  z-index: 10;
`;

export const Header: NextComponentType<NextPageContext, null, Props> = () => {
  return (
    <StyledHeader>
      <Button></Button>
    </StyledHeader>
  );
};
