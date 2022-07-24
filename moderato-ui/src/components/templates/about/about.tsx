import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import Image from 'next/image';
import { displayFlex, posUppLeft, MediaSP, posUppRight } from '@/styles/styled-components/global';
import { H2, H3 } from '@/components/atoms/heading';

const Wrapper = styled.div`
  ${displayFlex({ flexDirection: 'row' })};
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.black};

  /* > 直下 */
  > .image-wrap {
    ${posUppLeft({ top: '20%', left: '10%' })};
    width: 45%;
  }

  > .about-wrap {
    ${posUppRight({ top: '25%', right: '10%' })};
    width: 45%;
  }

  // position を absolute や fixed していたものを解除するには position: initial; で上書きしてリセットします
  ${MediaSP`
    ${displayFlex({ flexDirection: 'column' })};

    .image-wrap, .about-wrap {
      position: initial;
      width: 100%;
      height: 50%;
    }
  `}
`;

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

// next/image see https://www.wantedly.com/companies/wantedly/post_articles/385515
export const About: NextComponentType<NextPageContext> = () => {
  return (
    // 画面100vh
    // {/* flex作る これで上下中央に配置 & 100height */}
    <Wrapper data-testid='about-tpl'>
      <div className='image-wrap'>
        {/* 画面サイズからwidthとheightを変えられないか */}
        <Image
          src='/images/about_me.jpg'
          width='700'
          height='525'
          alt='me_image'
          // objectFit='cover'
          objectFit='contain'
          onError={(e) => {
            e.currentTarget.src = `https://placehold.jp/32/003060/e0e0e0/300x200.png`;
          }}
        />
      </div>
      <div className='about-wrap'>
        <AboutDesc>
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
            Born in Japan. Software engineer with experience as a beautician in Tokyo (Ginza). When
            he was using a mac he bought for a model shoot, he started to be interested in how PCs
            work, and he found himself becoming an engineer. He believes that one&apos;s entire life
            is creative. He is always looking for ways to apply his experience in designing
            people&apos;s hair to the IT industry.
          </p>
        </AboutDesc>
      </div>
    </Wrapper>
  );
};
