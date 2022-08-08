import { NextComponentType, NextPageContext } from 'next';
import { Related } from '@/components/molecules/card';
import { H2 } from '@/components/atoms/heading';
import { Blog } from '@/types/model';

import styled from 'styled-components';

type Props = {
  className?: string;
  blogs: Blog[];
};

const RelatedWrap = styled.section`
  .related-title {
    padding: 1rem;
  }
`;

/**
 * @desc 関連おすすめブログ
 */
export const RelatedSection: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  blogs,
}) => {
  return (
    <RelatedWrap className={className}>
      <H2 className='related-title' text='Related' size='2rem' />
      <Related blogs={blogs} />
    </RelatedWrap>
  );
};
