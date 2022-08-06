import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { H2, H3 } from '@/components/atoms/heading';
import { posUppLeft, MediaSP } from '@/styles/styled-components/global';

const AboutDesc = styled.div`
  color: ${(props) => props.theme.white};
  background-color: #222222e6;
  user-select: none;
  position: relative;

  > .desc-title {
    ${posUppLeft({ top: '-6%', left: '0' })};
    font-family: 'Mrs Saint Delafield', cursive;
    transform: rotate(-15deg);
  }

  > .desc-subtitle {
    padding: 2rem 1rem;
  }

  > .desc {
    font-size: 0.75rem;
    color: ${(props) => props.theme.descColor};
  }

  > .ja {
    padding: 0 1rem 1rem;
  }

  > .en {
    padding: 0 1rem 1rem;
  }

  ${MediaSP`
    .desc-subtitle {
      font-size: 1.5rem;
    }

    .desc {
      font-size: 0.8rem;
    }

    .en {
      padding: 0 1rem 100vh;
    }
  `}
`;

// どこかで管理する？

export const Desc: NextComponentType<NextPageContext> = () => {
  return (
    <AboutDesc date-testid='about-desc'>
      <H2 className='desc-title' size='2rem' text='Coding in Design' />
      <H3
        className='desc-subtitle'
        size='1rem'
        text='My mission is to write coding as beautifully as design and to make the whole team excited!'
      />
      <p className='desc ja'>
        千葉出身。都内（銀座）での美容師経験があるソフトウェアエンジニア。モデル撮影のために購入したmacを使っていたらPCの仕組みが気になり始め、気づいたらエンジニアに。人生まるごとクリエイティブだと思っている。人の髪をデザインしていた経験をIT業界へ活かせることはないか日々模索中。
      </p>
      <p className='desc en'>
        Born in Japan. Software engineer with experience as a beautician in Tokyo (Ginza). When he
        was using a mac he bought for a model shoot, he started to be interested in how PCs work,
        and he found himself becoming an engineer. He believes that one&apos;s entire life is
        creative. He is always looking for ways to apply his experience in designing people&apos;s
        hair to the IT industry.
      </p>
    </AboutDesc>
  );
};
