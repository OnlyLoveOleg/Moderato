import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { TableOfContentsType } from '@/libs/parser';
import { H2 } from '@/components/atoms/heading';

// 拡張したいなら今後入れる.
type Props = {
  className?: string;
  toc: TableOfContentsType[];
};

const Wrapper = styled.aside``;

/**
 * @desc 目次
 */
export const TableContents: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  toc,
}) => {
  return (
    <Wrapper className={className}>
      <H2 text='目次' size='2rem' />
      {toc.map((t) => {
        return (
          <li key={t.id}>
            <a href={`#${t.id}`}>{t.text}</a>
          </li>
        );
      })}
    </Wrapper>
  );
};
