import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { displayFlex } from '@/styles/styled-components/global';

type Props = {
  className?: string;
};

const Wrapper = styled.div`
  ${displayFlex({ flexDirection: 'row' })};
  background: ${(props) => props.theme.black};
  width: 100vw;
  height: 100vh;

  > p {
    color: #121212;
    display: inline-block;
    font-family: arial;
    font-size: 4em;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    transform: scale(0.5);
    -webkit-text-stroke: 2px gray;
  }

  > p:nth-child(1) {
    animation: hover 1s linear infinite;
  }

  > p:nth-child(2) {
    animation: hover 1s linear infinite 0.125s;
  }

  > p:nth-child(3) {
    animation: hover 1s linear infinite 0.25s;
  }

  > p:nth-child(4) {
    animation: hover 1s linear infinite 0.375s;
  }

  > p:nth-child(5) {
    animation: hover 1s linear infinite 0.5s;
  }

  > p:nth-child(6) {
    animation: hover 1s linear infinite 0.675s;
  }

  > p:nth-child(7) {
    animation: hover 1s linear infinite 0.75s;
  }

  @keyframes hover {
    0% {
      transform: scale(0.5);
      color: #121212;
      -webkit-text-stroke: 2px gray;
    }

    20% {
      transform: scale(1);
      color: pink;
      -webkit-text-stroke: 3px red;
      filter: drop-shadow(0 0 1px black) drop-shadow(0 0 1px black) drop-shadow(0 0 3px red)
        drop-shadow(0 0 5px red) hue-rotate(10turn);
    }

    50% {
      transform: scale(0.5);
      color: #121212;
      -webkit-text-stroke: 2px gray;
    }
  }
`;

export const Loading: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <p>l</p>
      <p>o</p>
      <p>a</p>
      <p>d</p>
      <p>i</p>
      <p>n</p>
      <p>g</p>
    </Wrapper>
  );
};
