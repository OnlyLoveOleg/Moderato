# Architecture

## next setup

`$ npx create-next-app@latest moderato-ui --ts`

## getStaticProps

[参考URL](https://zenn.dev/catnose99/articles/7201a6c56d3c88)

## Thank you.

[参考URL](https://blog.microcms.io/microcms-next-jamstack-blog/)

## Blog Layout.

[参考URL](https://blog.hubspot.com/blog/tabid/6307/bid/34143/12-inspiring-examples-of-beautiful-blog-homepage-designs.aspx)

## Deploy

mainにmergeしたらdeploy
blog apiを更新したらdeploy

## CMS

[Document](https://document.microcms.io/content-api/get-list-contents)

## 命名規則

[参考URL](https://scrapbox.io/takoba/React%E3%82%92%E6%8E%A1%E7%94%A8%E3%81%97%E3%81%9FTypeScript%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E5%91%BD%E5%90%8D%E8%A6%8F%E5%89%87)

ReactではコンポーネントはUpperCamelでないとコンパイルエラーになる
lowerCamelは元々 JSの開発での慣習

以上を踏まえて以下とする

```sh
pages/** # lowerCamel（http pathの概念を適用）
components/** # UpperCamel
```

## テストツール

```sh
jest # Storybook と Jest を利用した Snapshot test や Unit test を実行する
@testing-library/react # Storybook と react-testing-library を利用した Unit test を実行する
@testing-library/user-event # Unit test でクリックや文字入力などユーザーインタラクションを実行する
@testing-library/jest-dom # Jest カスタムマッチャーを利用可能にする
@testing-library/react-hooks # Unit Test で React Hooks を利用可能にする
@storybook/addon-storyshots # 各 Story で Snapshot test を作成する
react-test-renderer # Snapshot test 実行時に snapshot を出力する
@storybook/testing-react # jest のテストコード中に Story を利用可能にする
@storybook/testing-library # storybook のコード中に userEvent や screen など react-testing-library の機能 を利用可能にする
identity-obj-proxy # CSS Modules をモックする
```

## API key 隠蔽

https://zenn.dev/mr_ozin/articles/17920ca403b8af

## UI実装について

子コンポーネントではmarginは使わない。
適切なpaddingならOK

## テスト ロケーター

`data-testid`で特定するようにする

## CSS設計

reset & baseに関しては利便性を考慮しsassで実装した。

## 画像ファイル名

```
[使うpage名]_[内容].拡張子
```

## dynamic import 

[参考URL](https://nishinatoshiharu.com/overview-next-dynamic-import/)