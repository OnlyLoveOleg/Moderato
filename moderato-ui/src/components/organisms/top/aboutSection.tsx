import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
// import { FadeInAnimation } from '@/components/molecules/animation/fade-in-animation';

type Props = {
  className?: string;
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.black};
`;
/**
 * TODO: ここにある要素は全てfadeIn
 */
export const AboutSection: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      {/* <FadeInAnimation tag='h2'>size</FadeInAnimation> */}
    </Wrapper>
  );
};
