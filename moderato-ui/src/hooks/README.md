# hooks

カスタムフック入れのディレクトリとして機能させる。

全部分けられるわけではない。
関数コンポーネントの中にあるstaticだけが分けられる

[これを参考にして作る](https://qiita.com/cheez921/items/af5878b0c6db376dbaf0)

- カスタムフックの関数はメモ化推奨（useCallback）


関数のメモ化
useCallback

値のメモ化
useMemo

```sh
composable
├── components    # each component custom hooks
│   ├── atoms
│   └── molecules 
├── helper
│   └── index.ts  # Generic only for this project
├── pages
│   ├── blog
│   └── top
└── use-app.ts    # use app.tsx
```