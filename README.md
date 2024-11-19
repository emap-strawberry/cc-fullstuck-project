# Number Guessing Game

3 桁の数字当てゲームです。

## ゲームのルール(アプリの詳細)

答えとなる数字は 3 桁とも重複がないように設定されています。  
また、0 から始まることはありません。

プレイヤーは答えとなる 3 桁の数字を予想して入力してください。  
入力された数の各数字が、設定した数に含まれているが桁は違うなら BITE、桁も一致していれば EAT として"⚪︎EAT、⚪︎BITE"というように答えが返ってくるので、  
設定した数を当てる(="3EAT、0BITE")ことができれば勝ちとなります。

## セットアップ手順

0. リポジトリのクローンとパッケージインストール

```
git clone https://github.com/emap-strawberry/cc-fullstuck-project.git
cd cc-fullstuck-project
npm i
```

1. env ファイルの作成
   `cc-fullstuck-project/`に`.env.local`を作成し、以下を記載

```
DB_USER=XXXX
DB_PASSWORD=XXXX
DB_NAME=XXXX
PORT=3000
VITE_API_BASE_URL = http://localhost:3000/api
```

2. express サーバーの立ち上げ

```
psql -U postgres
postgres=# create database number_guess_app;
postgres-# \q

npm run migrate
npm run seed
npm run start
```

2. vite の立ち上げ

```
npm run dev
```

3. プレイ！

- ゲームを遊ぶ
  - http://localhost:5173/
- 【参考】guess_records テーブルのレコード確認
  - http://localhost:3000/api/guess_records

## 今はないが、追加で実装したい機能(将来の計画)

- ランキング作成
  - 手数の少ない順で作成
  - 手数、ユーザー名を保存するテーブルを作成する必要がある
- 数字をスマホのようにボタンで入力
- 数字のクリアボタンの作成

## リソース

```
cc-fullstuck-project
| .env.local(クローン後に作成)
| .gitignore
| index.css
| index.html
| index.js
| knexfile.js
| package-lock.json
| package.json
| README.md
| README_dev.md
| vite.config.js
|
+---backend
| | server.js
| |
| +---db
| | | knex.js
| | |
| | +---migrations
| | | 20241115064851_create_guess_records_table.js
| | |
| | \---seeds
| | 20241115065636_initial_guess_records.js
| |
| \---tests
| controller.test.js
|
+---frontend
| eslint.config.js
|
 +---public
| vite.svg
|
 \---src
| App.css
| main.jsx
| NumberGuessingGame.jsx
| ResetGame.jsx
|
 \---assets
favicon.png
react.svg
```
