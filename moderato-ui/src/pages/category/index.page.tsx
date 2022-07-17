import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import Link from 'next/link';

import { HomeAPI } from '@/libs/apis';

/**
 * @desc カテゴリー一覧 page
 * categoryに紐づくblogを見せるpage
 * category の コンテンツidが必要でありそれでblog 一覧を取得する
 */

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const categories = await HomeAPI.fetchCategoryList();

  return {
    props: {
      categories,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/** sortとか必要 */

const Category: NextPage<Props> = ({ categories }) => {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
