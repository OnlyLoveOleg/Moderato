import { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
// import { FadeInH2 } from '@/components/molecules/animation';
import { H2Props } from '@/components/molecules/animation';
import { Vertical } from '@/components/atoms/line';
import { posUppLeft } from '@/styles/styled-components/global';

const FadeInH2 = dynamic<H2Props>(
  () => import('@/components/molecules/animation').then((module) => module.FadeInH2),
  { ssr: false },
);

type Props = {
  className?: string;
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.black};
  position: relative;

  .vertical-line {
    ${posUppLeft({ top: '-5%', left: '50%' })}
    height: 100px;
    width: 2px;
    color: #fff;
    background: #555555;
  }
`;
/**
 * TODO: ここにある要素は全てfadeIn
 */
export const AboutSection: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Vertical className='vertical-line' />
      <FadeInH2 text='ABOUT ME' size='3rem' direction='up' />
    </Wrapper>
  );
};
