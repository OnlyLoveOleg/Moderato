import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { pickThumbnail } from '@/composable/helper';

type Props = {
  className?: string;
  blogs: Blog[];
};

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;

  .card {
    width: 280px;
    height: 360px;
    border-radius: 15px;
    padding: 1.5rem;
    background: white;
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: 0.4s ease-out;
    box-shadow: 0px 7px 10px rgba(black, 0.5);

    &:hover {
      transform: translateY(20px);
      &:before {
        opacity: 1;
      }
      .info {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      background: rgba(0, 0, 0, 0.6);
      z-index: 2;
      transition: 0.5s;
      opacity: 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 15px;
    }
    .info {
      position: relative;
      z-index: 3;
      color: white;
      opacity: 0;
      transform: translateY(30px);
      transition: 0.5s;
      h1 {
        margin: 0px;
      }
      p {
        letter-spacing: 1px;
        font-size: 15px;
        margin-top: 8px;
      }
      button {
        padding: 0.6rem;
        outline: none;
        border: none;
        border-radius: 3px;
        background: white;
        color: black;
        font-weight: bold;
        cursor: pointer;
        transition: 0.4s ease;
        &:hover {
          background: dodgerblue;
          color: white;
        }
      }
    }
  }
`;

/**
 * @desc before hover → image only
 *       after hover → image set title with desc
 */
export const Transition: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  blogs,
}) => {
  return (
    <Wrapper className='wrapper'>
      {blogs.map((b) => {
        return (
          <div className='card' key={b.id}>
            <img src='https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D' />
            <div className='info'>
              <h1>Mountain</h1>
              <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
              <button>Read More</button>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};
