import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { displayFlex, MediaSP } from '@/styles/styled-components/global';
import { pickThumbnail } from '@/composable/helper';
import { Category as CategoryTag, IconTag } from '@/components/atoms/tag';
import { UserIcon } from '@/components/atoms/icon';
import { H4, H5 } from '@/components/atoms/heading';
import { Day } from '@/components/atoms/text';

type Props = {
  className?: string;
  blogs: Blog[];
};

const Wrapper = styled.div`
  ${displayFlex({
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
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
      height: 250px;
      object-fit: cover;
      cursor: pointer;
    }

    &-body {
      ${displayFlex({
        justifyContent: 'space-around',
        alignItems: 'flex-start',
      })};
      padding: 10px;
      min-height: 200px;

      &-tag {
        ${displayFlex({
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        })};
      }

      &-user {
        ${displayFlex({
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        })};
        width: 100%;

        &__author {
          margin: 0 1rem;
        }

        &__day {
          color: #545d7a;
        }
      }
    }
  }

  ${MediaSP`
    ${displayFlex({ flexDirection: 'column' })};

    .card {
      width: 100%;
    }
  `}
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
      {blogs.map((b) => {
        return (
          <article className='card' key={b.id}>
            {/* header */}
            <div className='card-header'>
              <Link href={`/blogs/${b.id}`}>
                {/* <a> これ入れないとerrorが出るが画像が表示されない */}
                <Image src={pickThumbnail(b)} layout='fill' objectFit='cover' alt='rover' />
                {/* </a> */}
              </Link>
            </div>
            {/* body */}
            <div className='card-body'>
              {/* /category pageページでは id検索でblogを絞り込む */}
              <div className='card-body-tag'>
                <Link href={`/category/#${b.category.id}`}>
                  <a>
                    <CategoryTag themeColor={b.category.theme.hex6Color} text={b.category.name} />
                  </a>
                </Link>
                <IconTag tags={b.tags} />
              </div>

              <H4 size='1.5rem' text={b.title} />
              <div className='card-body-user'>
                <Link href={'/about'}>
                  <a>
                    <UserIcon author={b.author} height={'64px'} width={'64px'} />
                  </a>
                </Link>
                <H5 className='card-body-user__author' size='1rem' text={b.author.name} />
                <Day className='card-body-user__day' dayText={b.updatedAt} />
              </div>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};
