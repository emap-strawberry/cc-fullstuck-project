# cc-fullstuck-project

3 桁の数字当てゲームです。

## これはなに

開発者向けの README です。  
このリポジトリを作成した際に用いたコマンドを備忘録として記載してあります。

※このリポジトリを clone/fork して動かすだけならば通常[README.md](./README.md)に書いてあるコマンドを実行すれば動きますが、  
なぜか実行がうまくいかないときなどに使えるかと思います。

## 動かし方

### `backend/`

```
npm i mocha chai@4 chai-http@4 sinon -D
npm install express
npm install morgan

npm init -y
npm i knex pg dotenv
npx knex init
npx knex migrate:make create_guess_records_table
npx knex seed:make initial_guess_records --timestamp-filename-prefix

psql -U postgres
postgres=# create database number_guess_app;
postgres-# \q

npm run migrate
npm run seed
npm run start
```

### `frontend/`

```
npm install react
npm install react-dom
npm install axios
npm install vite -D
npm create vite@latest
npm install cors
```
