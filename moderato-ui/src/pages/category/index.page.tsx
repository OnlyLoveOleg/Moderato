import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
// components
import { CategoryTpl, Layout } from '@/components/templates';
import { Meta } from '@/components/molecules/common';
// lib
import { HomeAPI } from '@/libs/apis';
import { fullPath } from '@/hooks/helper';

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
  const { asPath } = useRouter();
  return (
    <>
      <Meta pageFullPath={fullPath(asPath)} pageAsPath={asPath} />
      <Layout showFooter={true}>
        <CategoryTpl categories={categories} primaryCategories={primaryCategories} />
      </Layout>
    </>
  );
};

export default Category;
