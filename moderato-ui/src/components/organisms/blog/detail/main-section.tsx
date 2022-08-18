import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';

type Props = {
  className?: string;
  blogDetail: Blog;
};

const Wrapper = styled.section`
  margin-bottom: 20px;
`;

/** 全体の設定 */
export const MainSection: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  blogDetail,
}) => {
  return (
    <Wrapper className={className}>
      <h1>{blogDetail.title}</h1>
      {/* <p>{detail.publishedAt}</p> */}
      {/* APIから返される記事本文は文字列形式（HTMLタグも文字列として取得される）なので、これをHTMLとして描画するためにdangerouslySetInnerHTML
      を使っています。 */}
      <div
        dangerouslySetInnerHTML={{
          __html: `${blogDetail.content}`,
        }}
      />
    </Wrapper>
  );
};
