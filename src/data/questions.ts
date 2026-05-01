import type { Question } from "../types/diagnosis";

export const questions: Question[] = [
  {
    id: 1,
    text: "開発していて一番テンションが上がる瞬間は？",
    answers: [
      {
        text: "使う人に「便利そう！」と言ってもらえたとき",
        scores: { productHero: 2 },
      },
      {
        text: "画面がいい感じに整ったとき",
        scores: { uiMage: 2 },
      },
      {
        text: "難しい処理が思った通りに動いたとき",
        scores: { logicKnight: 2 },
      },
      {
        text: "原因不明のエラーを倒したとき",
        scores: { bugHunter: 2 },
      },
    ],
  },
  {
    id: 2,
    text: "実装で詰まったとき、まずどうする？",
    answers: [
      {
        text: "仕様や目的を見直して、何を実現したいか整理する",
        scores: { productHero: 1, strategySage: 1 },
      },
      {
        text: "エラー文やログをじっくり読む",
        scores: { bugHunter: 1, logicKnight: 1 },
      },
      {
        text: "まず小さく動くコードを書いて試す",
        scores: { speedNinja: 1, logicKnight: 1 },
      },
      {
        text: "誰かに相談したり、状況を言語化する",
        scores: { communicationPriest: 1, strategySage: 1 },
      },
    ],
  },
  {
    id: 3,
    text: "チーム開発で自然とやりがちな役割は？",
    answers: [
      {
        text: "「この機能ってユーザーに必要かな？」と考える",
        scores: { productHero: 2 },
      },
      {
        text: "画面や使いやすさの違和感に気づく",
        scores: { uiMage: 2 },
      },
      {
        text: "タスクや構造を整理する",
        scores: { strategySage: 2 },
      },
      {
        text: "メンバーの困りごとを拾う",
        scores: { communicationPriest: 2 },
      },
    ],
  },
  {
    id: 4,
    text: "新しい機能を作るとき、最初にやりたいことは？",
    answers: [
      {
        text: "とりあえず最低限動くものを作る",
        scores: { speedNinja: 2 },
      },
      {
        text: "必要なデータや処理の流れを考える",
        scores: { strategySage: 1, logicKnight: 1 },
      },
      {
        text: "画面イメージや操作感を考える",
        scores: { uiMage: 2 },
      },
      {
        text: "どんな不具合が起きそうか考える",
        scores: { bugHunter: 1, refactorBlacksmith: 1 },
      },
    ],
  },
  {
    id: 5,
    text: "他の人の実装を見るとき、つい見てしまうのは？",
    answers: [
      {
        text: "ユーザーにとって自然な流れになっているか",
        scores: { productHero: 1, uiMage: 1 },
      },
      {
        text: "ロジックが分かりやすく書かれているか",
        scores: { logicKnight: 1, refactorBlacksmith: 1 },
      },
      {
        text: "バグや例外が起きそうなところはないか",
        scores: { bugHunter: 2 },
      },
      {
        text: "全体の構成や責務分担が整理されているか",
        scores: { strategySage: 1, refactorBlacksmith: 1 },
      },
    ],
  },
  {
    id: 6,
    text: "締切が近いとき、あなたはどう動く？",
    answers: [
      {
        text: "まず最低限動く形にして完成を目指す",
        scores: { speedNinja: 2 },
      },
      {
        text: "優先順位を整理して、必要なものから進める",
        scores: { strategySage: 1, productHero: 1 },
      },
      {
        text: "見た目や使いやすさも最後まで整えたい",
        scores: { uiMage: 1, refactorBlacksmith: 1 },
      },
      {
        text: "動作確認やバグ潰しに集中する",
        scores: { bugHunter: 1, logicKnight: 1 },
      },
    ],
  },
  {
    id: 7,
    text: "開発中に言われて一番嬉しいのは？",
    answers: [
      {
        text: "「この機能、めっちゃ使いやすいね！」",
        scores: { productHero: 1, uiMage: 1 },
      },
      {
        text: "「この処理、よく実装できたね！」",
        scores: { logicKnight: 2 },
      },
      {
        text: "「バグ見つけてくれて助かった！」",
        scores: { bugHunter: 2 },
      },
      {
        text: "「相談しやすくて助かった！」",
        scores: { communicationPriest: 2 },
      },
    ],
  },
  {
    id: 8,
    text: "今後、自分がもっと伸ばしたい力は？",
    answers: [
      {
        text: "ユーザー目線でサービスを考える力",
        scores: { productHero: 2 },
      },
      {
        text: "実装力・ロジックを組む力",
        scores: { logicKnight: 2 },
      },
      {
        text: "設計やコード整理の力",
        scores: { strategySage: 1, refactorBlacksmith: 1 },
      },
      {
        text: "チームで協力して進める力",
        scores: { communicationPriest: 2 },
      },
    ],
  },
];
