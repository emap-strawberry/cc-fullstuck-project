# Number Guessing Game

3 桁の数字当てゲームです。

## セットアップ手順

```
psql -U postgres
postgres=# create database number_guess_app;
postgres-# \q

npm run migrate
npm run seed
npm run start
```

- ゲームを遊ぶ
  - http://localhost:3000/
- guess_records テーブルのレコード確認
  - http://localhost:3000/api/guess_records

## ゲームのルール(アプリの詳細)

答えとなる数字は 3 桁とも重複がないように設定されています。  
また、0 から始まることはありません。

プレイヤーは答えとなる 3 桁の数字を予想して入力してください。  
入力された数の各数字が、設定した数に含まれているが桁は違うなら BITE、桁も一致していれば EAT として"⚪︎EAT、⚪︎BITE"というように答えが返ってくるので、  
設定した数を当てる(="3EAT、0BITE")ことができれば勝ちとなります。

## 今はないが、追加で実装したい機能(将来の計画)

- ランキング作成
  - 手数の少ない順で作成
  - 手数、ユーザー名を保存するテーブルを作成する必要がある

## リソース

あとで書きます。
