# コンピューターの組み立てアプリケーション

パーツを選んで「仮想のコンピュータ」を組み立て、その性能を評価し比較するアプリケーション。

このアプリケーションではパーツを選んで「仮想のコンピュータ」を組み立て、その性能を評価し、比較することが可能です。

コンピュータを構成するパーツは全部で4種類。

- CPU
- GPU
- メモリ
- ストレージ

各パーツの選択時には、ブランド、モデル、ストレージなどを入力します。 ブランドにはそのブランドが持っている情報をソートしてモデルに表示します。

## プロジェクトの目的

Recursionでは、`API`、`サーバー`についてその仕組みを理解し、`fetch`関数、`Promise`オブジェクト、`JSON`を使って情報を取得する方法をインプットしました。

アプトプットとして、コンピュータのパーツ情報を提供する API を利用し、コンピュータを組み立て、組み立てたコンピュータのスコアを表示するアプリケーションを作成することが目的です。

## 技術的な側面
    
このプロジェクトでは以下の技術スタックを採用しました。

### OOP（オブジェクト指向プログラミング）
### MVCアーキテクチャ
### TypeScript
### Tailwind CSS
### Vite
### Vercel

## 問題解決と工夫
- MVCアーキテクチャではControllerでそれぞれのオブジェクトの操作を行いました。
ModelとViewが互いに干渉することなく、安全なデータの受け渡しを行うように設計しました。

### APIを使用して各パーツの情報を取得

<table>
  <tr>
    <th>パーツ</th>
    <th>リクエスト先</th>
  </tr>
  <tr>
    <td>CPU</td>
    <td>https://api.recursionist.io/builder/computers?type=cpu</td>
  </tr>
  <tr>
    <td>GPU</td>
    <td>https://api.recursionist.io/builder/computers?type=gpu</td>
  </tr>
  <tr>
    <td>RAM</td>
    <td>https://api.recursionist.io/builder/computers?type=ram</td>
  </tr>
  <tr>
    <td>HDD</td>
    <td>https://api.recursionist.io/builder/computers?type=hdd</td>
  </tr>
  <tr>
    <td>SSD</td>
    <td>https://api.recursionist.io/builder/computers?type=ssd</td>
  </tr>
</table>
上記の各APIは上位100までのパーツ情報を保持しています。

APIから取得したデータを取得することで、簡単に膨大なデータを取得することができました。

APIからデータを取得する際、以下のように行いました。

例) cpuのデータ取得
```
const cpuData = fetch(url)
  .then(response => response.json())
  .then((data) => {
    for(let cpu of data){
      console.log(cpu)
    }
  })
```

### MVC アーキテクチャ

<table>
  <tr>
    <th>分類</th>
    <th>クラス</th>
  </tr>
  <tr>
    <td>Model</td>
    <td>Computer</td>
  </tr>
  <tr>
    <td>View</td>
    <td>View</td>
  </tr>
  <tr>
    <td>Controller</td>
    <td>Controller</td>
  </tr>
</table>

Controllerでmodelとviewのインスタンスを作成して、modelとviewの操作を行いました。

各要素が互いに影響しにくく、システムの保守性や生産性を向上させるために採用しました。

### OOP interfaceの拡張

コンピュータが持っているデータはCPU, GPU, RAMは同一の型ですが、StorageのみHDDかSSDかを区別するためにtypeというデータをもっています。

CPU, GPU, RAM
```
brand: brandName
model: modelName
```

Storage
```
type: storageType
brand: brandName
model: modelName
```

そこで、Partsという継承元のinterfaceを作成して
各パーツでPartsのinterfaceを継承しました。

パーツ
```
interface Parts {
  brand: string
  model: string
}

interface Storage extends Parts {
  type: string
}
```

これにより、データを安全に操作することができました。

## 学びと成長
    
このプロジェクトを通して以下のような学びや成長がありました。

- MVCアーキテクチャを用いた設計を行えるようになった
- OOPの型の指定がスムーズに行えるようになった
- APIからデータを取得して、処理を実装できるようになった

## コードの品質と構造
    
コードの品質についての考え方や重要視する点、プロジェクトのディレクトリ構造やコーディングスタイルについて説明します。

このプロジェクトではオブジェクト指向プログラミングのデザインパターンとしてMVCアーキテクチャを採用しています。

これを採用したことで開発速度の向上と安全なデータの操作が行えています。

コーディングは静的なViewの実装から取り掛かり、Model、Controller、動的なViewの実装という順番で進めていきました。

ディレクトリは以下のようになりました。

- config : 設定ファイル
- interface : オブジェクトの型の指定
- model : コンピュータのデータを定義
- controller : modelとviewの操作を定義
- view : 画面に表示するdomを定義

## 今後の展望
    
このプロジェクトを通してAPIの操作には慣れることができました。

しかし、TypeScriptのみの環境下で使用されるケースは少ないと考えており、今後はReactやNext.jsなどのモダンなライブラリやフレームワークの環境下でのAPIの使用にも慣れていきたいです。

## 参考文献

- https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
