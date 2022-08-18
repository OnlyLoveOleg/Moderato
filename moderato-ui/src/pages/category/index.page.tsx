import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { CategoryTpl, Layout } from '@/components/templates';
import { HomeAPI } from '@/libs/apis';

/**
 * @desc カテゴリー一覧 page
 * categoryに紐づくblogを見せるpage
 * category の コンテンツidが必要でありそれでblog 一覧を取得する
 * [slug]はなし。#id 検索で他pageから遷移してくる。
 */

export const getStaticProps = async (context: GetStaticPropsContext) => {
  console.log(context);
  const categories = await HomeAPI.fetchCategoryList();
  const primaryCategories = await HomeAPI.fetchPrimaryCategoryList();

  return {
    props: {
      categories,
      primaryCategories,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * sortとか必要
 * dynamic import使う
 * https://zenn.dev/uhyo/books/react-concurrent-handson/viewer/what-is-suspense
 * @see https://tech.012grp.co.jp/entry/next_dynamicImport
 */
const Category: NextPage<Props> = ({ categories, primaryCategories }) => {
  return (
    <Layout showFooter={true}>
      <CategoryTpl categories={categories} primaryCategories={primaryCategories} />
    </Layout>
  );
};

export default Category;
