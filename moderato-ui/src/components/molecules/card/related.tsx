import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { displayFlex } from '@/styles/styled-components/global';
import { pickThumbnail } from '@/composable/helper';
import { Category as CategoryTag } from '@/components/atoms/tag';
import { UserIcon } from '@/components/atoms/icon';
import { H4, H5 } from '@/components/atoms/heading';
import { Paragraph, Day } from '@/components/atoms/text';

type Props = {
  className?: string;
  blogs: Blog[];
};

const Wrapper = styled.div`
  ${displayFlex({
    justifyContent: 'space-evenly',
    alignItems: 'flex-start;',
    flexDirection: 'row',
  })};
  flex-wrap: wrap;
  width: 100%;

  .card {
    margin: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 45%;

    &-header {
      width: 100%;
      height: 200px;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    min-height: 250px;
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
}) => {
  return (
    <Wrapper className={className}>
      {blogs.map((b, i) => {
        return (
          <article className='card' key={i}>
            <div className='card-header'>
              <Link href={`/blogs/${b.id}`}>
                {/* <a> これ入れないとerrorが出るが画像が表示されない */}
                <Image src={pickThumbnail(b)} layout='fill' objectFit='cover' alt='rover' />
                {/* </a> */}
              </Link>
            </div>

            <div className='card-body'>
              {/* id検索でblogを絞り込む */}
              <Link href={`/category/#${b.category.id}`}>
                <a>
                  <CategoryTag text={b.category.name} />
                </a>
              </Link>
              <H4 size='1.5rem' text={b.title} />
              <Paragraph size='2rem' text={b.subTitle} />

              <div className='user'>
                <Link href={'/about'}>
                  <a>
                    <UserIcon author={b.author} height={'48px'} width={'48px'} />
                  </a>
                </Link>
                <H5 size='1rem' text={b.author.name} />
                <Day dayText={b.updatedAt} />
              </div>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};
