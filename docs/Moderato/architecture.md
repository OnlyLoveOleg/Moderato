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

Reactではコンポーネントは UpperCamel でないとコンパイルエラーになる
lowerCamel は元々 JS の開発での慣習

以上を踏まえて以下とする

```sh
pages/** # lowerCamel
components/** # UpperCamel
```