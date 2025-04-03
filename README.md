# baseフォルダ
## training_frontend
### 開発環境
* vite + TypeScript
```bash
pnpm create vite@latest training_frontend --template vanilla-ts
```
### 概要
* javascript・typescript研修で使用します。
* styles.cssにスタイルを適用しています。
* index.htmlに使用する`main.ts`と`practice.ts`を適用させています。
* index.htmlでhtmlを作成し、main.tsでjavascript及びtypescriptの記述を行います。
* practice.tsは各自で試したいときに使用してみてください。

*** 
## training_react
### 開発環境
* vite + TypeScript + React
```bash
pnpm create vite@latest training_react --template react-swc-ts
```
### 概要
* React基礎研修で使用します。
* viteを使ったビルド環境をほぼそのまま残しています。
* `App.tsx`のみ削除しました。
* 作業は`App.tsx`をメインで行います。

*** 
## chat_app
### 開発環境
* vite + TypeScript + React
```bash
pnpm create vite@latest chat_app --template react-swc-ts
```

### 概要
* Reactハンズオン研修で使用します
* `styles`フォルダとscssは記述してあります。
* 各種パッケージをインストールしています。

| パッケージ名 | パッケージ内容 |
|--------------|----------------|
| `react-router-dom` | ReactでSPA内の**ページ遷移**を実現するためのライブラリ |
| `sass` | Reactで**SCSS**を使えるようにするためのライブラリ |
| `normalize.css` | ブラウザごとの見た目の差をなくすための**リセットCSS** |
| `@mui/material`<br>`@mui/icons-material`<br>`@emotion/react`<br>`@emotion/styled` | Googleのデザインシステムに基づいた**UIコンポーネントやアイコン**を提供するライブラリセット |


# complete
* 各プロジェクトの完成版になります。



