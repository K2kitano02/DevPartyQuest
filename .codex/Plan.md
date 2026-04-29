このファイルは Dev Party Quest の仕様の正です。診断仕様、データ設計、画面構成、スコア計算、MVP範囲を定義します。

`.codex/TODO.md` は、この `Plan.md` をもとに実装者が順番に作業できるよう整理したIssue一覧です。実装順序や作業粒度は `TODO.md` を参照し、仕様内容の判断はこの `Plan.md` を優先します。

各選択肢には、対応する診断タイプへのスコアを設定します。

### Q1. 開発していて一番テンションが上がる瞬間は？

| 選択肢 | 加点タイプ |
| --- | --- |
| 使う人に「便利そう！」と言ってもらえたとき | productHero +2 |
| 画面がいい感じに整ったとき | uiMage +2 |
| 難しい処理が思った通りに動いたとき | logicKnight +2 |
| 原因不明のエラーを倒したとき | bugHunter +2 |

### Q2. 実装で詰まったとき、まずどうする？

| 選択肢 | 加点タイプ |
| --- | --- |
| 仕様や目的を見直して、何を実現したいか整理する | productHero +1 / strategySage +1 |
| エラー文やログをじっくり読む | bugHunter +1 / logicKnight +1 |
| まず小さく動くコードを書いて試す | speedNinja +1 / logicKnight +1 |
| 誰かに相談したり、状況を言語化する | communicationPriest +1 / strategySage +1 |

### Q3. チーム開発で自然とやりがちな役割は？

| 選択肢 | 加点タイプ |
| --- | --- |
| 「この機能ってユーザーに必要かな？」と考える | productHero +2 |
| 画面や使いやすさの違和感に気づく | uiMage +2 |
| タスクや構造を整理する | strategySage +2 |
| メンバーの困りごとを拾う | communicationPriest +2 |

### Q4. 新しい機能を作るとき、最初にやりたいことは？

| 選択肢 | 加点タイプ |
| --- | --- |
| とりあえず最低限動くものを作る | speedNinja +2 |
| 必要なデータや処理の流れを考える | strategySage +1 / logicKnight +1 |
| 画面イメージや操作感を考える | uiMage +2 |
| どんな不具合が起きそうか考える | bugHunter +1 / refactorBlacksmith +1 |

### Q5. 他の人の実装を見るとき、つい見てしまうのは？

| 選択肢 | 加点タイプ |
| --- | --- |
| ユーザーにとって自然な流れになっているか | productHero +1 / uiMage +1 |
| ロジックが分かりやすく書かれているか | logicKnight +1 / refactorBlacksmith +1 |
| バグや例外が起きそうなところはないか | bugHunter +2 |
| 全体の構成や責務分担が整理されているか | strategySage +1 / refactorBlacksmith +1 |

### Q6. 締切が近いとき、あなたはどう動く？

| 選択肢 | 加点タイプ |
| --- | --- |
| まず最低限動く形にして完成を目指す | speedNinja +2 |
| 優先順位を整理して、必要なものから進める | strategySage +1 / productHero +1 |
| 見た目や使いやすさも最後まで整えたい | uiMage +1 / refactorBlacksmith +1 |
| 動作確認やバグ潰しに集中する | bugHunter +1 / logicKnight +1 |

### Q7. 開発中に言われて一番嬉しいのは？

| 選択肢 | 加点タイプ |
| --- | --- |
| 「この機能、めっちゃ使いやすいね！」 | productHero +1 / uiMage +1 |
| 「この処理、よく実装できたね！」 | logicKnight +2 |
| 「バグ見つけてくれて助かった！」 | bugHunter +2 |
| 「相談しやすくて助かった！」 | communicationPriest +2 |

### Q8. 今後、自分がもっと伸ばしたい力は？

| 選択肢 | 加点タイプ |
| --- | --- |
| ユーザー目線でサービスを考える力 | productHero +2 |
| 実装力・ロジックを組む力 | logicKnight +2 |
| 設計やコード整理の力 | strategySage +1 / refactorBlacksmith +1 |
| チームで協力して進める力 | communicationPriest +2 |

## スコア計算仕様

### 初期状態

診断開始時、すべてのタイプのスコアを0にします。

```ts
const initialScores: Record<RoleType, number> = {
  productHero: 0,
  uiMage: 0,
  logicKnight: 0,
  bugHunter: 0,
  strategySage: 0,
  communicationPriest: 0,
  speedNinja: 0,
  refactorBlacksmith: 0,
};
```

### 回答時の処理

ユーザーが回答を選択したら、その回答に設定された `scores` を現在のスコアに加算します。

その後、次の質問へ進みます。

### 結果判定

最後の質問に回答したあと、最もスコアが高いタイプを診断結果として表示します。

### 同点処理

複数タイプが同点になった場合は、以下の優先順位で結果を決定します。

```ts
const rolePriority: RoleType[] = [
  "productHero",
  "uiMage",
  "logicKnight",
  "bugHunter",
  "strategySage",
  "communicationPriest",
  "speedNinja",
  "refactorBlacksmith",
];
```

## 結果データ仕様

結果ページで表示する内容は、`results.ts` に定義します。

実装時に文言を推測しないように、MVPで使用する8タイプ分の表示データをこのセクションで確定します。

### Result型

```ts
export type Result = {
  type: RoleType;
  typeName: string;
  jobName: string;
  catchCopy: string;
  description: string;
  strengths: string[];
  weakness: string;
  teamRole: string;
  compatibility: {
    good: RoleType[];
    message: string;
  };
};
```

### results.ts に定義するデータ

```ts
export const results: Record<RoleType, Result> = {
  productHero: {
    type: "productHero",
    typeName: "プロダクト勇者",
    jobName: "勇者",
    catchCopy: "ユーザー価値を武器に、開発パーティーを前へ進める主人公タイプ",
    description:
      "使う人の気持ちや、サービスの目的を考えながら開発できるタイプです。実装だけでなく「この機能は誰のためにあるのか？」という視点を大切にします。",
    strengths: [
      "ユーザー目線で考えられる",
      "目的から逆算して判断できる",
      "チームの方向性を前向きに整えられる",
    ],
    weakness:
      "理想の体験を考えるあまり、実装したいことが増えすぎることがあります。",
    teamRole:
      "チームが迷ったときに、サービスの目的やユーザー価値に立ち返らせてくれる存在です。",
    compatibility: {
      good: ["strategySage", "logicKnight"],
      message:
        "設計参謀が道筋を整理し、ロジック剣士が実装で形にしてくれると、あなたのアイデアが一気にプロダクトになります。",
    },
  },

  uiMage: {
    type: "uiMage",
    typeName: "UI魔法使い",
    jobName: "魔法使い",
    catchCopy: "画面に魔法をかけ、使いたくなる体験を生み出すタイプ",
    description:
      "見た目や操作感に敏感で、アプリの第一印象を良くするのが得意なタイプです。色、余白、配置、動きなどの細かい違いにも気づきやすいです。",
    strengths: [
      "画面の完成度を上げられる",
      "ユーザー体験を意識できる",
      "アプリの雰囲気づくりが得意",
    ],
    weakness:
      "見た目にこだわるほど、細部の調整に時間を使いすぎることがあります。",
    teamRole:
      "アプリを「ただ動くもの」から「触って楽しいもの」に近づけてくれる存在です。",
    compatibility: {
      good: ["productHero", "refactorBlacksmith"],
      message:
        "プロダクト勇者が体験の方向性を示し、改善鍛冶師が細部を磨くことで、UIの魅力がさらに引き立ちます。",
    },
  },

  logicKnight: {
    type: "logicKnight",
    typeName: "ロジック剣士",
    jobName: "剣士",
    catchCopy: "コードで道を切り開く、実装突破タイプ",
    description:
      "条件分岐、データ処理、状態管理など、アプリを動かすための処理に向き合えるタイプです。難しそうな実装も一つずつ分解して考えられます。",
    strengths: [
      "実装力で前に進められる",
      "論理的に考えられる",
      "複雑な処理を整理して組み立てられる",
    ],
    weakness:
      "処理に集中しすぎて、画面の見やすさや使いやすさが後回しになることがあります。",
    teamRole:
      "難しい実装や処理部分を支え、チームのアイデアを実際に動く形へ近づけてくれる存在です。",
    compatibility: {
      good: ["productHero", "bugHunter"],
      message:
        "プロダクト勇者が目的を示し、バグハンターが品質を守ってくれることで、安心して実装に集中できます。",
    },
  },

  bugHunter: {
    type: "bugHunter",
    typeName: "バグハンター",
    jobName: "狩人",
    catchCopy: "不具合の気配を見逃さない、品質を守る観察眼タイプ",
    description:
      "エラー文、違和感のある動き、想定外の操作などに気づきやすいタイプです。原因を探りながら、アプリの完成度を高めていけます。",
    strengths: [
      "バグや違和感に気づきやすい",
      "原因調査を粘り強く進められる",
      "リリース前の安心感を高められる",
    ],
    weakness:
      "細かい不具合が気になって、なかなか「完成！」と言い切れないことがあります。",
    teamRole:
      "チームが安心して前に進めるように、見落としがちな問題を発見してくれる存在です。",
    compatibility: {
      good: ["logicKnight", "refactorBlacksmith"],
      message:
        "ロジック剣士が実装を進め、改善鍛冶師が整えてくれることで、あなたの発見が品質アップに直結します。",
    },
  },

  strategySage: {
    type: "strategySage",
    typeName: "設計参謀",
    jobName: "軍師",
    catchCopy: "全体を見渡し、勝てる開発ルートを組み立てる作戦タイプ",
    description:
      "実装前に全体像を整理したり、データ構造やコンポーネント分割を考えたりするのが得意なタイプです。行き当たりばったりより、見通しを立てて進めたい傾向があります。",
    strengths: [
      "全体像を整理できる",
      "仕様や構造の抜け漏れに気づける",
      "後から困りにくい形を考えられる",
    ],
    weakness:
      "考える時間が長くなりすぎて、最初の一歩が遅くなることがあります。",
    teamRole:
      "開発の道筋を整理し、チームが迷わず進めるように支えてくれる存在です。",
    compatibility: {
      good: ["productHero", "speedNinja"],
      message:
        "プロダクト勇者が目的を示し、爆速忍者が素早く形にすることで、あなたの設計が実戦で活きます。",
    },
  },

  communicationPriest: {
    type: "communicationPriest",
    typeName: "コミュ力僧侶",
    jobName: "僧侶",
    catchCopy: "相談しやすい空気で、開発パーティーのHPを回復する支援タイプ",
    description:
      "質問、相談、共有を大切にできるタイプです。困っている人に気づいたり、チームの雰囲気をやわらかくしたりする力があります。",
    strengths: [
      "相談しやすい雰囲気を作れる",
      "情報共有を大切にできる",
      "チームの不安を和らげられる",
    ],
    weakness:
      "周りを気にかけるあまり、自分の作業を後回しにしてしまうことがあります。",
    teamRole:
      "メンバー同士をつなぎ、チーム全体が前向きに進める空気を作ってくれる存在です。",
    compatibility: {
      good: ["speedNinja", "strategySage"],
      message:
        "爆速忍者の勢いと設計参謀の整理力をつなぐことで、チーム全体が安心して前に進めます。",
    },
  },

  speedNinja: {
    type: "speedNinja",
    typeName: "爆速忍者",
    jobName: "忍者",
    catchCopy: "まず動かして流れを作る、初速最強の突破タイプ",
    description:
      "考えすぎるより、まず手を動かして形にするのが得意なタイプです。MVPを素早く作り、そこから改善していく進め方と相性が良いです。",
    strengths: [
      "初速が速い",
      "試作やたたき台作りが得意",
      "停滞した空気を動かせる",
    ],
    weakness:
      "スピード重視で進めるため、細かい設計や整理が後回しになることがあります。",
    teamRole:
      "「まず形にしてみよう」と開発を前に進め、チームに勢いを生み出してくれる存在です。",
    compatibility: {
      good: ["strategySage", "communicationPriest"],
      message:
        "設計参謀が道筋を整え、コミュ力僧侶がチームを支えることで、あなたのスピードがより活きます。",
    },
  },

  refactorBlacksmith: {
    type: "refactorBlacksmith",
    typeName: "改善鍛冶師",
    jobName: "鍛冶師",
    catchCopy: "動くものをさらに磨き上げる、完成度アップタイプ",
    description:
      "一度作ったものをより良くするのが得意なタイプです。コードの読みやすさ、UIの微調整、処理の整理など、細部を磨くことに力を発揮します。",
    strengths: [
      "完成度を上げられる",
      "コードやUIの違和感に気づける",
      "保守しやすい形に近づけられる",
    ],
    weakness:
      "改善したいポイントが見えすぎて、終わりどころに迷うことがあります。",
    teamRole:
      "完成したものをさらに使いやすく、読みやすく、育てやすい形に鍛え直してくれる存在です。",
    compatibility: {
      good: ["uiMage", "bugHunter"],
      message:
        "UI魔法使いの表現力とバグハンターの観察眼が合わさると、あなたの改善力でアプリの完成度が一気に高まります。",
    },
  },
};
```

## 画面ごとの仕様

### トップページ

#### 表示する内容

- アプリ名
- サブタイトル
- サービス説明文
- 診断開始ボタン

#### 挙動

- 「診断を始める」ボタンを押すと、診断ページの1問目を表示します。
- トップページではスコア計算は行いません。

### 診断ページ

#### 表示する内容

- 現在の質問番号
- 全質問数
- 進捗バー
- 質問文
- 回答選択肢4つ

#### 挙動

- 回答を選ぶとスコアを加算します。
- 回答後、自動で次の質問へ進みます。
- 8問目の回答後は結果ページを表示します。
- MVPでは「前の質問に戻る」機能は実装しません。

### 結果ページ

#### 表示する内容

- タイプ名
- RPG職業名
- キャッチコピー
- 特徴
- 強み
- ちょっとした弱点
- チームでの立ち回り
- 相性
- もう一度診断ボタン
- Xで共有ボタン

#### 挙動

- 診断結果のタイプに対応する詳細情報を表示します。
- 「もう一度診断する」ボタンを押すと、スコアと回答状態をリセットしてトップページへ戻ります。
- 「Xで共有」ボタンを押すと、診断結果を含んだ共有画面を別タブで開きます。

## X共有仕様

### 共有文テンプレート

```txt
私の開発パーティーロールは「{タイプ名}」でした！

{キャッチコピー}

#DevPartyQuest
```

### 実装イメージ

```ts
const shareText = `私の開発パーティーロールは「${result.typeName}」でした！\n\n${result.catchCopy}\n\n#DevPartyQuest`;
const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

window.open(shareUrl, "_blank");
```

## ディレクトリ構成案

```txt
src/
  components/
    AnswerButton.tsx
    ProgressBar.tsx
    QuestionCard.tsx
    ResultCard.tsx
  data/
    questions.ts
    results.ts
  types/
    diagnosis.ts
  App.tsx
  main.tsx
```

## コンポーネント設計案

### AnswerButton

回答選択肢を表示するボタンコンポーネントです。

#### Props

- `text`
- `onClick`

### ProgressBar

診断の進捗を表示するコンポーネントです。

#### Props

- `currentQuestionIndex`
- `totalQuestions`

### QuestionCard

質問文と回答選択肢をまとめて表示するコンポーネントです。

#### Props

- `question`
- `currentQuestionIndex`
- `totalQuestions`
- `onAnswer`

### ResultCard

診断結果を表示するコンポーネントです。

#### Props

- `result`
- `onRestart`
- `onShare`

## 状態管理方針

Reactの `useState` で管理します。

### 管理する状態

- 現在の画面状態
- 現在の質問番号
- スコア
- 診断結果

### 画面状態の例

```ts
type AppStep = "start" | "question" | "result";
```

## MVP完了条件

以下を満たしたらMVP完成とします。

- トップページから診断を開始できる
- 8問すべてに回答できる
- 回答内容に応じてスコアが加算される
- 最もスコアが高いタイプを結果として表示できる
- 結果画面にタイプ詳細が表示される
- もう一度診断できる
- Xで診断結果を共有できる

## 今後余裕があれば追加したいこと

- RPG風のアニメーション
- タイプごとのアイコン
- 結果カードの画像化
- 効果音
- localStorageによる直近結果の保持
- OGP画像の設定

compatibility.good には表示名ではなく RoleType を格納します。
表示時は `results[role].typeName` を参照して、タイプ名に変換します。
