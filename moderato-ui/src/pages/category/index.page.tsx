import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import Link from 'next/link';

import { HomeAPI } from '@/libs/apis';

// これは、ビルド時にサーバー側で呼ばれる関数です。この部分の処理は最終的にバンドルJSに含まれません。
// ビルド時にデータを取得し、静的なHTMLを出力するために必要です。
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
