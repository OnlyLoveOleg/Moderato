import type { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import Link from 'next/link';

import { HomeAPI } from '@/libs/apis';

// type DefaultOptions = {
//   e: string;
//   name: string;
// };

// type DictionaryValue = {
//   fileName: string;
//   filePath: string;
// };

// type Dictionary = Map<Key, DictionaryValue>;

// // https://webbibouroku.com/Blog/Article/js-map
// const defaultOptions: Dictionary = new Map([
//   [
//     'e',
//     {
//       fileName: 'encrypted',
//       filePath: '', // デフォルトではカレント
//     },
//   ],
//   [
//     'd',
//     {
//       fileName: 'decrypted',
//       filePath: '',
//     },
//   ],
// ]);

/**
 * @desc カテゴリー一覧 page
 * categoryに紐づくblogを見せるpage
 * category の コンテンツidが必要でありそれでblog 一覧を取得する
 */

export const getStaticProps = async (context: GetStaticPropsContext) => {
  console.log(context);
  const categories = await HomeAPI.fetchCategoryList();

  return {
    props: {
      categories,
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
