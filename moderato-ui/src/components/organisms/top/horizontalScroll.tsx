import { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';
import { AppGSAP } from '@/libs/animation';

export type Props = {
  blogs: Blog[];
};

const Wrapper = styled.section`
  .slideSection {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .slide {
    display: inline-flex;
    gap: 150px;
    margin-bottom: 300px;
  }
  .slide_wrapper {
    max-width: 100%;
    padding: 0 50px;
    overflow: hidden;
  }
  .singleslide {
    position: relative;
    cursor: pointer;
  }
  .singleslide_image {
    overflow: hidden;
    width: 600px;
    height: 600px;
  }
  .singleslide_image img {
    width: 100%;
    height: auto;
    transform: scale(1.1);
    filter: grayscale(0);
    transition-duration: 0.5s;
  }
  .singleslide_text {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transition-duration: 0.5s;
    opacity: 0;
  }
  .singleslide_text_body {
    padding: 40px;
  }
  .singleslide_text_body > h4 {
    font-size: 60px;
    color: #ffffff;
  }
  .singleslide_text_body > p {
    font-size: 16px;
    color: #ffffff;
  }
  .singleslide:hover .singleslide_text {
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
  }
  .singleslide:hover .singleslide_image img {
    transform: scale(1.2);
    filter: grayscale(100%);
    transition-duration: 0.5s;
  }
`;

export const HorizontalScroll: NextComponentType<NextPageContext, null, Props> = ({ blogs }) => {
  useEffect(() => {
    const gsap = new AppGSAP();
    const slideTl = gsap.getGSAP.timeline({
      scrollTrigger: {
        trigger: '.slideSection',
        start: 'top 150',
        pin: true,
        end: `+=${innerHeight}`,
        scrub: 1,
      },
    });

    const target = document.querySelector('.slide');

    slideTl.to(target, {
      delay: 0.1,
      x: -target.clientWidth + innerWidth - 120,
      ease: 'none',
    });
  }, []);

  return (
    <Wrapper data-testid='horizontal-scroll'>
      <div className='slideSection'>
        <div className='slide_wrapper'>
          <ul className='slide'>
            <li className='singleslide'>
              <div className='singleslide_image'>
                <img src='img/slide1.jpg' alt='' />
              </div>
              <div className='singleslide_text'>
                <div className='singleslide_text_body'>
                  <h4>No.1</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </li>

            <li className='singleslide'>
              <div className='singleslide_image'>
                <img src='img/slide2.jpg' alt='' />
              </div>
              <div className='singleslide_text'>
                <div className='singleslide_text_body'>
                  <h4>No.2</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </li>

            <li className='singleslide'>
              <div className='singleslide_image'>
                <img src='img/slide3.jpg' alt='' />
              </div>
              <div className='singleslide_text'>
                <div className='singleslide_text_body'>
                  <h4>No.3</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
