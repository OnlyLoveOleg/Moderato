import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { TableOfContentsType } from '@/libs/parser';

// 拡張したいなら今後入れる.
type Props = {
  toc: TableOfContentsType[];
};

const Wrapper = styled.aside``;

/**
 * @desc 目次
 */
export const TableContents: NextComponentType<NextPageContext, null, Props> = ({ toc }) => {
  return (
    <Wrapper>
      <p>目次</p>
      {toc.map((t) => {
        return (
          <li key={t.id}>
            <a href={`#${t.text}`}>{t.text}</a>
          </li>
        );
      })}
    </Wrapper>
  );
};
