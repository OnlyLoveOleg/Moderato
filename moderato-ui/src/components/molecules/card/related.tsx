import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { displayFlex } from '@/styles/styled-components/global';

type Props = {
  className?: string;
  blogs: Blog[];
  onClick?: () => void;
};

const Wrapper = styled.div`
  ${displayFlex({
    justifyContent: 'space-evenly',
    alignItems: 'flex-start;',
    flexDirection: 'row',
  })};
  width: 100%;
  flex-wrap: wrap;

  .card {
    margin: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 45%;
  }
  .card-header img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    min-height: 250px;
  }

  .tag {
    background: #cccccc;
    border-radius: 50px;
    font-size: 12px;
    margin: 0;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .tag-teal {
    background-color: #47bcd4;
  }
  .tag-purple {
    background-color: #5e76bf;
  }
  .tag-pink {
    background-color: #cd5b9f;
  }

  .card-body p {
    font-size: 13px;
    margin: 0 0 40px;
  }
  .user {
    display: flex;
    margin-top: auto;
  }

  .user img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .user-info h5 {
    margin: 0;
  }
  .user-info small {
    color: #545d7a;
  }
`;

/**
 * @desc 関連カード
 */
export const Related: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  blogs,
  // onClick,
}) => {
  return (
    <Wrapper className={className}>
      {blogs.map((b, i) => {
        return (
          <article className='card' key={i}>
            <div
              className='card-header'
              style={{ position: 'relative', width: '100p%', height: '200px' }}
            >
              <Link href={`/blog/${b.id}`}>
                <Image src={b.thumbnail.url} layout='fill' objectFit='cover' alt='rover' />
              </Link>
            </div>

            <div className='card-body'>
              <span className='tag tag-teal'>Technology</span>
              <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
              <p>An exploration into the truck's polarising design</p>
              <div className='user'>
                <img
                  src='https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo'
                  alt='user'
                />
                <div className='user-info'>
                  <h5>July Dec</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};
