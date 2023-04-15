# ベースイメージとして公式のNodeイメージを使用
FROM node:16

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコンテナにコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコンテナにコピー
COPY . .

# ビルド
RUN npm run build

# ポート8080を公開
EXPOSE 8080

# コンテナ起動時に実行するコマンド
CMD [ "npm", "start" ]
