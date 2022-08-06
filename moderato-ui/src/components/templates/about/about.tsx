import { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { Desc } from '@/components/organisms/about';
import styled from 'styled-components';
import { displayFlex, posUppLeft, MediaSP, posUppRight } from '@/styles/styled-components/global';

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

// next/image see https://www.wantedly.com/companies/wantedly/post_articles/385515
export const About: NextComponentType<NextPageContext> = () => {
  return (
    <Wrapper data-testid='about-tpl'>
      <div className='image-wrap'>
        <Image
          src='/images/about_me.jpg'
          width='700'
          height='525'
          alt='me_image'
          objectFit='contain'
          onError={(e) => {
            e.currentTarget.src = `https://placehold.jp/32/003060/e0e0e0/300x200.png`;
          }}
        />
      </div>
      <div className='about-wrap'>
        <Desc />
      </div>
    </Wrapper>
  );
};
