import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';
import { Transition } from '@/components/molecules/card';
import { posLowLeft, displayFlex } from '@/styles/styled-components/global';

type Props = {
  latestBlogs: Blog[];
};

const Wrapper = styled.section`
  height: 100vh;
`;

export const LatestSection: NextComponentType<NextPageContext, null, Props> = ({ latestBlogs }) => {
  return (
    <Wrapper>
      <Transition blogs={latestBlogs} />
    </Wrapper>
  );
};
