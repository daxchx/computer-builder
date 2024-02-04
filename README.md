
# Computer Builder

## 概要

このアプリケーションではパーツを選んで「仮想のコンピュータ」を組み立て、その性能を評価し、比較することが可能です。

コンピュータを構成するパーツは全部で4種類。
- cpu
- gpu
- memory
- storage

各パーツの選択時には、ブランド、モデル、ストレージなどを入力します。
ブランドにはそのブランドが持っている情報をソートしてモデルに表示します。

## 使い方

#### URL にアクセス

https://computer-builder-beta.vercel.app/

#### CPU のブランドとモデルを選択

<img src="https://github.com/daxchx/computer-builder/assets/149696768/fe3a204a-61ca-4241-b9a9-406c080e26d0" width="400" />

#### GPU のブランドとモデルを選択

<img src="https://github.com/daxchx/computer-builder/assets/149696768/ff4ee867-ab7a-4e11-b42a-3328a397681e" width="400" />

#### Memory Card の数とブランドとモデルを選択

<img src="https://github.com/daxchx/computer-builder/assets/149696768/ab81fa8b-b1e3-4c45-a723-a112a16575f6" width="400" />

#### Storage のタイプとストレージとブランドとモデルを選択

<img src="https://github.com/daxchx/computer-builder/assets/149696768/a9873a5b-3e4b-40fe-aba2-06330eab62e7" width="400" />

#### 「build」ボタンを押すと、選択したパーツからコンピュータを組み立てます。

<img src="https://github.com/daxchx/computer-builder/assets/149696768/e1743ee5-99dd-40d7-b1b1-360df916b48d" width="400" />

#### 組み立てられたコンピュータの評価を確認

<img src="https://github.com/daxchx/computer-builder/assets/149696768/a4ab12fb-c425-4a90-9979-888868489f25" width="400" />

## 使用時の注意事項

#### ①選択は上から順に行う

各パーツの選択時には、上から順番に選択しましょう。

cpu, gpuの選択順
1. brand
2. model

<img src="https://github.com/daxchx/computer-builder/assets/149696768/af898f26-751a-4905-a1d8-197a0945ebac" />

memory cardの選択順
1. how many
2. brand
3. model

<img src="https://github.com/daxchx/computer-builder/assets/149696768/8dda8cd0-fb38-4176-9775-f6b7613ee73b" />

storageの選択順
1. type
2. storage
3. brand
4. model

<img src="https://github.com/daxchx/computer-builder/assets/149696768/f2c89c41-79e6-4e97-83a8-8bea88404542" />

#### ②選択肢が存在しないこともある

順番を守って選択していても選択肢が表示されないことがあります。

これは、選択した条件に当てはまるものが存在しない場合に起こります。

上の選択肢を変更してみて下さい。

<img src="https://github.com/daxchx/computer-builder/assets/149696768/f81c808b-132d-4250-b1e3-55452df4843c" />

## 各パーツの説明

### CPU（中央処理装置）

CPU（Central Processing Unit）は、コンピュータ内で計算や制御を担当する主要な部品です。

主にアルゴリズムに基づいて命令を実行し、データ処理を行います。クロックと呼ばれる振動に基づいて、定期的に命令を処理し、演算や論理操作を実行します。

また、キャッシュメモリを備え、高速なデータアクセスを可能にします。コンピュータの性能や速度は、CPUの性能に大きく依存しています。

### GPU（グラフィックス処理装置）

GPU（Graphics Processing Unit）は、主に画像処理やグラフィックス関連の演算に特化したプロセッシングユニットです。

最初はグラフィックス処理のために設計されましたが、近年では一般の計算処理（GPGPU：General-Purpose computing on Graphics Processing Units）にも利用され、高度な並列処理能力を持つことが特徴です。

特に、3Dグラフィックスや科学技術計算、機械学習などの分野で活用されています。

GPUは、CPUとは異なるアーキテクチャを持ち、大量のデータを同時に処理することが得意です。

### メモリ（RAM）

RAM（Random Access Memory）は、コンピュータがプログラムやデータにアクセスするための一時的な記憶装置です。

RAMは高速で読み書きが可能であり、コンピュータが実行中のプログラムや作業中のデータを一時的に格納します。

異なる種類のデータやプログラムがRAMに格納され、CPUがこれに迅速にアクセスして処理を行います。

しかし、RAMは電源を切るとデータが消失する揮発性のメモリであり、永続的なデータ保存には他のメディア（ハードディスクやSSDなど）が利用されます。

### ストレージ（HDD / SSD）

ストレージは、データや情報を永続的に保存するための装置やメディアのことを指します。

主にハードディスクドライブ（HDD）、ソリッドステートドライブ（SSD）、光学ディスク（CD、DVD、Blu-rayなど）、フラッシュドライブなどが一般的なストレージメディアとして使用されます。

コンピュータやデバイスのオペレーティングシステム、アプリケーション、ユーザーデータなどがストレージに保存され、電源を切ってもデータが保持される非揮発性メモリとして機能します。

#### HDD（ハードディスクドライブ）

HDD（Hard Disk Drive）は、データを永続的に保存するための記憶装置の一種です。

HDDは磁気ディスクを使用し、データは円盤上に磁気的なパターンとして記録されます。

読み取り/書き込みヘッドがディスク上を移動してデータアクセスを行います。

HDDは比較的大容量で、経済的なメモリソリューションとして普及していますが、動作部品が機械的であるため、SSDに比べて速度がやや低い傾向があります。

#### SSD（ソリッドステートドライブ）

SSD（Solid State Drive）は、データを永続的に保存するための記憶装置の一種で、フラッシュメモリを使用しています。

SSDは機械的な動作部品を持たず、情報を電子的に読み書きします。

このため、HDDよりも高速で信頼性があり、データアクセスが迅速です。

SSDは一般的に軽量・省電力で、コンピュータやデバイスの動作を向上させるために広く使用されています。

## 評価の算出

ユーザーがすべてのパーツを選んだら、プログラムは構築した仮想のコンピュータのスコアを計算します。
スコアは各パーツの性能に基づいており、ゲーム用か仕事用かによって重みが異なります。

これらのスコアは、ゲーミングまたは作業用の基準に従って、CPU,GPU,RAM,Storageの性能に重み付けされます。

各パーツのスコア（Benchmark）は0~100が基本ですが、そのパーツが特別に優れている場合には100を超えることがあります。

特にSSDのベンチマークスコアは最大400%まで上がるので、最終的なスコアに上記の重みよりも大きな影響を与える可能性があります。

組み立てたコンピュータが仕事用、ゲーム用として使用する際にどれだけ適しているかをスコアに表示します。

#### ゲーミング用基準
<table>
  <tr>
    <th>パーツ</th>
    <th>重み</th>
  </tr>
  <tr>
    <td>CPU</td>
    <td>25%</td>
  </tr>
  <tr>
    <td>GPU</td>
    <td>60%</td>
  </tr>
  <tr>
    <td>RAM</td>
    <td>12.5%</td>
  </tr>
  <tr>
    <td>Storage</td>
    <td>2.5%</td>
  </tr>
</table>

#### 作業用基準
<table>
  <tr>
    <th>パーツ</th>
    <th>重み</th>
  </tr>
  <tr>
    <td>CPU</td>
    <td>60%</td>
  </tr>
  <tr>
    <td>GPU</td>
    <td>25%</td>
  </tr>
  <tr>
    <td>RAM</td>
    <td>10%</td>
  </tr>
  <tr>
    <td>Storage</td>
    <td>5%</td>
  </tr>
</table>

***


## 技術スタック

<img src="https://github.com/daxchx/computer-builder/assets/149696768/263b3859-3122-48b3-9abb-cf0243f65e3b" alt="tech stack" width="400" />

<table>
  <tr>
    <th>分類</th>
    <th>スタック名</th>
  </tr>
  <tr>
    <td>言語</td>
    <td>TypeScript</td>
  </tr>
  </tr>
  <tr>
    <td>スタイル</td>
    <td>TailwindCSS</td>
  </tr>
  </tr>
  <tr>
    <td>ビルドツール</td>
    <td>Vite</td>
  </tr>
  </tr>
  <tr>
    <td>デプロイ</td>
    <td>Vercel</td>
  </tr>
  <tr>
    <td rowspan="2">その他</td>
    <td>Git</td>
  </tr>
  <tr>
    <td>GitHub</td>
  </tr>
</table>

## ワイヤーフレーム

<img src="https://github.com/daxchx/computer-builder/assets/149696768/83fe25ef-5cea-49cb-a941-f054733421d0" alt="" />

## 作成の経緯

以下の項目の理解を深めるために行いました。

- API
- TypeScript
- OOP
- MVC

## こだわった点

#### APIを使用して各パーツの情報を取得

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

#### MVC アーキテクチャ

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

#### UI

組み立てたコンピュータの比較が簡単にできるように横スクロールを用いました。
これにより、簡単に性能の比較ができるようになりました。

この横スクロールは、下記のコードで実現しています。

TailwindCSS
```
<div class="overflow-x-scroll">
  <div></div> // 組み立てたコンピュータのelement
</div>
```

#### OOP interfaceの拡張

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

## 参考文献

- https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
