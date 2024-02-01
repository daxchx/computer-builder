# Computer Builder

🤩 パーツを選んで「仮想のコンピュータ」を組み立て、その性能を評価し比較するアプリケーション

## 説明

組み立てたコンピュータは性能の評価を得ることができます。

評価は仕事用、ゲーム用の 2 種類が算出され、それぞれで使用した場合に 100%を基準として用途別の評価を算出します。

コンピュータを構成する部品は以下になります。

- cpu
- gpu
- memory
- storage

## 使い方

1. URL にアクセス
2. CPU のブランドとモデルを選択
3. GPU のブランドとモデルを選択
4. Memory Card の数とブランドとモデルを選択
5. Storage のタイプとストレージとブランドとモデルを選択
6. 「build」ボタンを押すと、選択したパーツからコンピュータを組み立てます。
7. 組み立てられたコンピュータの評価を確認

## 使用時の注意事項

各パーツは上から順に選択する必要があります。

例) CPU 選択時
モデルを先に選択しようとすると選択項目が空になっています。

各パーツの情報は上の情報に当てはまるものを次の選択肢に含めています。

上から順番に入力しても次の選択肢が表示されないことがあります。

これはそれに当てはまる項目が単純に存在していないだけなので、一つ前の選択肢を別のものに変更してみてください。

## 各パーツの説明

#### CPU

中央演算装置（central processing unit）は、制御装置と演算装置から構成されています。

制御装置はデコーダとも呼ばれ、命令を解読し、他の周辺機器を制御します。演算装置は、加算機を含む、実際の計算を行う部分です。

<img src="https://github.com/daxchx/computer-builder/blob/images/cpu.jpg" width="200" height="auto" />

#### GPU

#### RAM

主記憶装置（主記憶装置）は、コンピュータシステムにおいて、CPU が直接アクセスできる記憶装置です。この中には、RAM が含まれます。

RAM はコンピュータシステムのメインメモリとして使用される揮発性のメモリです。揮発性とは、電力が供給されないとデータを保持できない性質を指します。

コンピュータをシャットダウンまたは、再起動すると、RAM 内のデータは失われるため、この特性が強調されます。

#### HDD

#### SSD

## 評価の算出

組み立てたコンピュータが仕事用、ゲーム用として使用する際にどれだけ適しているかをスコアに表示します。

各パーツのモデルにはベンチマークというスコアが記載されています。

このスコアを用いて、算出されています。

仕事用のスコアの算出には、

- cpu ベンチマーク × 0.6
- gpu ベンチマーク × 0.25
- ram ベンチマーク × 0.1
- hdd ベンチマーク × 0.025
  を合計した数値を用います。

## API を使用してパーツ情報を取得

api url
cpu url
gpu url
ram url
hdd url
ssd url

fetch 時に得られる JSON オブジェクト

cpu
type

## 取得した情報を select element に適用

cpu
api を使用して cpu のデータを所得します。
データ構造は
type

gpu
api

## 選択したデータに基づいて次のデータを表示

fetch したデータは変数に保存していつでも使用しできるようにしておきます。

データを選択すると保存したデータの中から、選択した値に関連するデータのみをソートします。

## 技術スタック

- TypeScript
- TailwindCSS
- Vite
- Vercel
- Git
- GitHub

## こだわった点

- API の使用方法
  データの取得には fetch を用いて非同期で
  値を変更するたびに API を叩くと API が保持している情報の量によって遅延が発生する

そのため、最初のレンダリング時に

フェッチ API は、リクエストやレスポンスといったプロトコルを操作する要素にアクセスするための JavaScript インターフェイスです。グローバルの fetch() メソッドも提供しており、簡単で論理的な方法で、非同期にネットワーク越しでリソースを取得することができます。

コールバックベースの API である XMLHttpRequest とは異なり、Fetch は Promise ベースであり、サービスワーカー で簡単に使用できる優れた代替手段を提供します。Fetch は、CORS やその他の HTTP 拡張機能などの高度な HTTP 概念も統合します。

基本的なフェッチリクエストは、以下のコードを見てください。

```
async function logMovies() {
  const response = await fetch("http://example.com/movies.json");
  const movies = await response.json();
  console.log(movies);
}

const data = fetch(url).then(response => response.json()).then(() => console.log(data))
```

これはネットワーク越しに JSON ファイルを取得してパースし、コンソールにデータを出力するスクリプトです。 fetch() の最も簡単な使い方は 1 つの引数 — fetch で取得したいリソースへのパス — のみをとり、 Response オブジェクトで解決するプロミスを返します。

Response は、実際の JSON レスポンス本体を直接持っているのではなく、 HTTP レスポンス全体を表現するものです。 Response オブジェクトから JSON の本体の内容を抽出するには、 json() メソッドを使用します。これはレスポンス本体のテキストを JSON として解釈した結果で解決する第 2 のプロミスを返します。

- MVC アーキテクチャ
- UI
- オブジェクト指向プログラミング

## 参考文献

- https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch