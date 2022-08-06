import { NextComponentType, NextPageContext } from 'next';
import { Category } from '@/types/model';
import styled from 'styled-components';
import { SelectSection } from '@/components/organisms/category';

type Props = {
  categories: Category[];
  primaryCategories: Category[];
};

const Wrapper = styled.div``;

/**
 * @desc 構成
 * 最初の画面で全てのカテゴリーを表示。
 * 押下後、フワッとそのブログ一覧を出す（これはicsのheader登場みたいに）
 * onclickで何か状態を持つべきかも
 */
export const CategoryTpl: NextComponentType<NextPageContext, null, Props> = ({
  categories,
  primaryCategories,
}) => {
  // ここでselect 情報をもつ
  console.log(categories);
  // selectされたカード emitしてそれをifでtrueにしたやつを出す。出す間にgsapを仕込む
  return (
    <Wrapper data-testid='category-tpl'>
      {/* 最初にカテゴリーを選択させる */}
      <SelectSection categories={primaryCategories} />
    </Wrapper>
  );
};
