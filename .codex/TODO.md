

# TODO

Dev Party Quest の実装Issue一覧です。

`.codex/Plan.md` を仕様の正とし、このファイルでは実装者が迷わないように、最小機能単位の作業手順を整理します。

このファイルは、実装順序、Issueごとの目的、作業内容、完了条件を管理します。仕様の詳細や配点、表示文言の判断に迷った場合は `.codex/Plan.md` を優先してください。

## Issue 0: React + TypeScript/Vite + Tailwind CSS の初期構成とテスト画面を作成する

Status: Done
Branch: feature/02_issue0-vite-setup
PR: #3
Verified:
- npm install
- npm run build
- npm run dev -- --host 127.0.0.1
- ローカル開発サーバーの HTTP 200 応答確認
- Tailwind CSS が Vite 経由で配信されることを確認

# なぜ必要か

- 現在のIssueは `src/` 以下の機能実装から始まっているが、アプリを起動するための `package.json` やViteのエントリーポイントがまだ存在しないため。
- 実装者が以降のIssueを進める前に、開発サーバー起動・ビルド・プレビューができる土台を用意するため。
- 早い段階でテスト画面を作ることで、デプロイ後にローカル環境と本番環境の差異を確認できるようにするため。

# 必要なこと(簡易的に)

- React + TypeScript + Vite の最小構成を作成する。
- Tailwind CSS を使ってスタイルを実装できる環境を作成する。
- 開発・ビルド・プレビュー用のnpm scriptsを用意する。
- `src/` 配下に今後の実装で使う基本ディレクトリを作成する。
- 本番表示確認用の簡易テスト画面を作成する。
- `npm install`、`npm run dev`、`npm run build` で動作確認できる状態にする。

# やること(コードレベル)

- `package.json` を作成する。
- `scripts` に以下を追加する。
  - `dev`
  - `build`
  - `preview`
- React、React DOM、Vite、TypeScript、Vite React plugin など、Vite + React + TypeScript に必要な依存関係を追加する。
- Tailwind CSS と Vite 用Tailwind plugin を追加する。
- `index.html` を作成する。
- `src/main.tsx` を作成する。
- `src/App.tsx` を作成する。
- `src/index.css` を作成し、Tailwind CSS を読み込む。
- 以下のディレクトリを作成する。
  - `src/components/`
  - `src/data/`
  - `src/types/`
  - `src/utils/`
- TypeScript/Viteに必要な設定ファイルを作成する。
  - `tsconfig.json`
  - `vite.config.ts`
- `vite.config.ts` にReact pluginとTailwind CSS pluginを設定する。
- `src/App.tsx` では一旦、テスト画面として以下を表示する。
  - `Dev Party Quest`
  - `デプロイ確認用テスト画面`
  - `React + TypeScript + Vite + Tailwind CSS で起動中`
  - 簡易的なボタンまたはカード表示

# ゴール(期待する動作など)

- `npm install` が成功する。
- `npm run dev` で開発サーバーを起動できる。
- ブラウザで開くとテスト画面が表示される。
- `npm run build` が成功する。
- Tailwind CSS のユーティリティクラスでスタイルを指定できる。
- 以降のIssueで `src/` 以下の実装を進められる状態になっている。

## Issue 1: Vercelで初回デプロイする

Status: Done
Branch: feature/04_issue1-vercel-deploy
PR: #5
Production URL: https://devpartyquest.vercel.app/
Verified:
- Vercel にデプロイ済み
- 本番URLで HTTP 200 応答確認
- README.md に公開URLを記録

# なぜ必要か

- テスト画面作成後すぐにデプロイすることで、バグの早期発見につなげるため。
- ローカル環境と本番環境の差異を、実装初期の段階で確認できるようにするため。
- 以降の機能追加ごとに、公開URL上で動作確認できる状態を作るため。

# 必要なこと(簡易的に)

- GitHubにリポジトリをpushする。
- VercelとGitHubリポジトリを連携する。
- Vite用のビルド設定でデプロイする。
- デプロイURLでテスト画面が表示されることを確認する。

# やること(デプロイ手順)

- `npm run build` が成功することを確認する。
- GitHubに最新コードをpushする。
- VercelでNew Projectを作成する。
- 対象のGitHubリポジトリをImportする。
- Framework Preset が `Vite` になっていることを確認する。
- Build Command が `npm run build` になっていることを確認する。
- Output Directory が `dist` になっていることを確認する。
- Deployを実行する。
- 発行されたURLにアクセスしてテスト画面が表示されることを確認する。
- 本番URL `https://devpartyquest.vercel.app/` にアクセスして、テスト画面が表示されることを確認する。
- 公開URLを `README.md` に記録する。

# ゴール(期待する動作など)

- Vercel上でアプリが公開されている。
- 公開URLにアクセスするとテスト画面が表示される。
- 本番URL `https://devpartyquest.vercel.app/` で表示確認できる。
- ローカルと本番の表示に大きな差異がないことを確認できる。
- `README.md` から公開URLを確認できる。
- 以降のIssueで機能追加後、同じURL上で本番確認できる状態になっている。

## Issue 2: 診断用の型定義を作成する

Status: Done
Branch: feature/05_issue2-diagnosis-types
PR: #6
Verified:
- npm test
- npm run build
- Playwright MCP でローカル画面表示とコンソールエラーなしを確認

# なぜ必要か

- 質問データ、回答データ、結果データ、スコア計算で共通して使う型を先に定義するため。
- 型を先に固めることで、以降の実装でデータ構造のブレを防ぐため。

# 必要なこと(簡易的に)

- 診断タイプを表す `RoleType` を定義する。
- 回答、質問、結果、スコア、画面状態の型を定義する。

# やること(コードレベル)

- `src/types/diagnosis.ts` を作成する。
- `RoleType` を定義する。
- `Answer` を定義する。
- `Question` を定義する。
- `Result` を定義する。
- `Scores` を定義する。
- `AppStep` を定義する。

# ゴール(期待する動作など)

- `src/types/diagnosis.ts` から診断関連の型をimportできる。
- 以降のデータ定義、スコア計算、コンポーネントで同じ型を使い回せる。

## Issue 3: 結果データを作成する

Status: Done
Branch: feature/06_issue3-results-data
PR: #7
Verified:
- npm test
- npm run build
- Playwright MCP でローカル画面表示とコンソールエラーなしを確認

# なぜ必要か

- 結果画面で表示する8タイプ分の文言を実装者が推測せずに扱えるようにするため。
- MVP完了条件である「結果画面にタイプ詳細が表示される」を満たすため。

# 必要なこと(簡易的に)

- Plan.mdの「結果データ仕様」にある8タイプ分のデータを定数として定義する。
- `compatibility.good` は表示名ではなく `RoleType[]` として保持する。
- 表示時は `results[role].typeName` で表示名に変換する前提にする。

# やること(コードレベル)

- `src/data/results.ts` を作成する。
- `results: Record<RoleType, Result>` を定義する。
- 以下8タイプのデータを定義する。
  - `productHero`
  - `uiMage`
  - `logicKnight`
  - `bugHunter`
  - `strategySage`
  - `communicationPriest`
  - `speedNinja`
  - `refactorBlacksmith`
- 各タイプに以下の項目を入れる。
  - `type`
  - `typeName`
  - `jobName`
  - `catchCopy`
  - `description`
  - `strengths`
  - `weakness`
  - `teamRole`
  - `compatibility.good`
  - `compatibility.message`

# ゴール(期待する動作など)

- `results[roleType]` で該当タイプの結果データを取得できる。
- 8タイプすべての結果表示に必要な文言が定義されている。
- `compatibility.good` の値から相性の良いタイプ名を表示できる。

## Issue 4: 質問データを作成する

Status: Done
Branch: feature/07_issue4-question-data
PR: #8
Verified:
- npm test
- npm run build
- Playwright MCP でローカル画面表示とコンソールエラーなしを確認

# なぜ必要か

- 診断ページで表示する8問と、回答ごとの加点ルールを定義するため。
- スコア計算が決定的に行えるようにするため。

# 必要なこと(簡易的に)

- Plan.mdの「質問設計」にある8問を定数として定義する。
- 各質問に4つの選択肢を持たせる。
- 各選択肢に加点対象のタイプと点数を設定する。

# やること(コードレベル)

- `src/data/questions.ts` を作成する。
- `questions: Question[]` を定義する。
- 質問ごとに以下を定義する。
  - `id`
  - `text`
  - `answers`
- 各回答に以下を定義する。
  - `text`
  - `scores`
- `scores` は `Partial<Record<RoleType, number>>` 形式で定義する。

# ゴール(期待する動作など)

- `questions` に8問分のデータが入っている。
- 各質問に4つの回答がある。
- 各回答にスコア加算対象が定義されている。

## Issue 5: スコア計算ロジックを作成する

Status: In Progress
Branch: feature/08_issue5-diagnosis-logic
PR: #9
Verified:
- npm test
- npm run build
- Playwright MCP でローカル画面表示とコンソールエラーなしを確認

# なぜ必要か

- ユーザーの回答から診断結果を決定するため。
- 同点時も毎回同じ結果になるようにするため。

# 必要なこと(簡易的に)

- 初期スコアを作成する。
- 回答選択時にスコアを加算する。
- 最もスコアが高いタイプを判定する。
- 同点時はPlan.mdの優先順位で結果を決定する。

# やること(コードレベル)

- `src/utils/diagnosis.ts` を作成する。
- `initialScores` を定義する。
- `rolePriority` を定義する。
- `addScores(currentScores, answerScores)` を作成する。
- `calculateResult(scores)` を作成する。
- `calculateResult` は `RoleType` を返す。

# ゴール(期待する動作など)

- 回答ごとのスコアを加算できる。
- 最高点のタイプを取得できる。
- 同点の場合も固定の優先順位で1つのタイプを取得できる。

## Issue 6: トップページを作成する

# なぜ必要か

- ユーザーがアプリの内容を理解し、診断を開始できる入口を作るため。

# 必要なこと(簡易的に)

- アプリ名、サブタイトル、説明文を表示する。
- 診断開始ボタンを表示する。
- ボタン押下で診断ページへ進める。

# やること(コードレベル)

- `src/components/StartScreen.tsx` を作成する。
- Propsとして `onStart` を受け取る。
- 以下を表示する。
  - `Dev Party Quest`
  - `あなたの開発パーティーロール診断`
  - アプリ説明文
  - `診断を始める` ボタン
- ボタン押下時に `onStart` を呼ぶ。

# ゴール(期待する動作など)

- トップページが表示される。
- 「診断を始める」ボタンを押すと1問目へ進む。

## Issue 7: 回答ボタンコンポーネントを作成する

# なぜ必要か

- 診断ページで回答選択肢を共通の見た目と挙動で表示するため。

# 必要なこと(簡易的に)

- 回答テキストを表示する。
- クリック時に親コンポーネントへ回答選択を通知する。

# やること(コードレベル)

- `src/components/AnswerButton.tsx` を作成する。
- Propsとして `text` と `onClick` を受け取る。
- `button` 要素で回答を表示する。
- クリック時に `onClick` を実行する。

# ゴール(期待する動作など)

- 回答テキストがボタンとして表示される。
- ボタンを押すと指定した処理が実行される。

## Issue 8: 進捗バーコンポーネントを作成する

# なぜ必要か

- ユーザーが診断の残り質問数を把握できるようにするため。

# 必要なこと(簡易的に)

- 現在の質問番号と全質問数を表示する。
- 進捗率を視覚的に表示する。

# やること(コードレベル)

- `src/components/ProgressBar.tsx` を作成する。
- Propsとして `currentQuestionIndex` と `totalQuestions` を受け取る。
- `currentQuestionIndex + 1` を現在の質問番号として表示する。
- 進捗率を計算してバー表示に反映する。

# ゴール(期待する動作など)

- `1 / 8` のように現在の進捗が表示される。
- 回答が進むごとに進捗バーが伸びる。

## Issue 9: 質問カードコンポーネントを作成する

# なぜ必要か

- 診断ページで質問文と回答選択肢をまとめて表示するため。

# 必要なこと(簡易的に)

- 現在の質問文を表示する。
- 回答選択肢4つを表示する。
- 回答選択時に親へ選択した回答を渡す。

# やること(コードレベル)

- `src/components/QuestionCard.tsx` を作成する。
- Propsとして以下を受け取る。
  - `question`
  - `currentQuestionIndex`
  - `totalQuestions`
  - `onAnswer`
- `ProgressBar` を表示する。
- `question.text` を表示する。
- `question.answers` をmapして `AnswerButton` を表示する。
- 回答ボタン押下時に、選択した回答を `onAnswer` に渡す。

# ゴール(期待する動作など)

- 現在の質問と4つの回答が表示される。
- 回答を押すと親コンポーネントに回答データが渡る。

## Issue 10: 結果カードコンポーネントを作成する

# なぜ必要か

- 診断結果の詳細情報を、仕様どおりに表示するため。

# 必要なこと(簡易的に)

- 結果タイプの詳細情報を表示する。
- 相性の良いタイプを表示名に変換して表示する。
- もう一度診断ボタンとX共有ボタンを表示する。

# やること(コードレベル)

- `src/components/ResultCard.tsx` を作成する。
- Propsとして以下を受け取る。
  - `result`
  - `onRestart`
  - `onShare`
- 以下を表示する。
  - `result.typeName`
  - `result.jobName`
  - `result.catchCopy`
  - `result.description`
  - `result.strengths`
  - `result.weakness`
  - `result.teamRole`
  - `result.compatibility.good`
  - `result.compatibility.message`
- `compatibility.good` は `results[role].typeName` で表示名に変換する。
- `もう一度診断する` ボタンを表示し、押下時に `onRestart` を呼ぶ。
- `Xで共有` ボタンを表示し、押下時に `onShare` を呼ぶ。

# ゴール(期待する動作など)

- 結果画面に必要なすべての項目が表示される。
- 相性の良いタイプが日本語のタイプ名で表示される。
- もう一度診断できる。
- X共有処理を呼び出せる。

## Issue 11: アプリ全体の画面状態を管理する

# なぜ必要か

- トップ、診断中、結果表示の画面切り替えを行うため。
- 回答ごとのスコアと現在の質問番号を管理するため。

# 必要なこと(簡易的に)

- `App.tsx` で画面状態を管理する。
- 現在の質問番号を管理する。
- スコアを管理する。
- 診断結果タイプを管理する。

# やること(コードレベル)

- `src/App.tsx` を編集する。
- `step` stateを作成する。
- `currentQuestionIndex` stateを作成する。
- `scores` stateを作成する。
- `resultType` stateを作成する。
- `handleStart` を作成する。
- `handleAnswer` を作成する。
- `handleRestart` を作成する。
- `step` に応じて以下を表示する。
  - `StartScreen`
  - `QuestionCard`
  - `ResultCard`

# ゴール(期待する動作など)

- トップページ、診断ページ、結果ページが状態に応じて切り替わる。
- 回答するたびに次の質問へ進む。
- 8問目の回答後に結果ページへ進む。
- もう一度診断すると最初の状態に戻る。

## Issue 12: X共有機能を作成する

# なぜ必要か

- 診断結果をイベント内やXで共有できるようにするため。

# 必要なこと(簡易的に)

- 診断結果を含む共有文を作成する。
- Xの投稿画面を別タブで開く。

# やること(コードレベル)

- `src/utils/share.ts` を作成する。
- `createShareText(result)` を作成する。
- `shareToX(result)` を作成する。
- 共有文は以下の形式にする。

  ```txt
  私の開発パーティーロールは「{タイプ名}」でした！

  {キャッチコピー}

  #DevPartyQuest
  ```

- `shareToX` で `https://twitter.com/intent/tweet?text=` を使う。
- `encodeURIComponent` で共有文をエンコードする。
- `window.open(shareUrl, "_blank")` で開く。

# ゴール(期待する動作など)

- 結果画面の「Xで共有」ボタンを押すと、Xの投稿画面が別タブで開く。
- 投稿文にタイプ名、キャッチコピー、ハッシュタグが含まれる。

## Issue 13: 最低限のRPG風スタイルを当てる

# なぜ必要か

- Dev Party Quest のコンセプトであるRPG風・ゲーム風の体験に近づけるため。
- ミニアプリイベントで見た目の印象を良くするため。

# 必要なこと(簡易的に)

- 全体の背景、カード、ボタンをRPG風に整える。
- 読みやすさを損なわないようにする。
- スマホでも見やすいレイアウトにする。

# やること(コードレベル)

- `src/App.css` または既存のCSSファイルを編集する。
- 全体レイアウトを中央寄せにする。
- コンテンツ幅の最大値を設定する。
- 質問カードと結果カードに枠線、角丸、余白を設定する。
- ボタンにホバー時の変化を設定する。
- 進捗バーの見た目を整える。
- スマホ幅でも崩れないように調整する。

# ゴール(期待する動作など)

- トップ、質問、結果の各画面が読みやすく表示される。
- RPG風・ゲーム風の雰囲気が伝わる。
- スマホ幅でも操作しやすい。

## Issue 14: MVP動作確認を行う

# なぜ必要か

- MVP完了条件を満たしているか確認するため。
- 質問、スコア、結果、共有の一連の流れに問題がないか確認するため。

# 必要なこと(簡易的に)

- トップページから結果表示までの流れを確認する。
- 8問すべて回答できることを確認する。
- 結果が表示されることを確認する。
- もう一度診断できることを確認する。
- X共有が起動することを確認する。

# やること(コードレベル)

- 開発サーバーを起動する。
- ブラウザでアプリを開く。
- 診断開始ボタンを押す。
- 8問回答する。
- 結果ページが表示されることを確認する。
- 「もう一度診断する」ボタンを押す。
- トップページへ戻ることを確認する。
- 再度診断できることを確認する。
- 「Xで共有」ボタンを押して投稿画面が開くことを確認する。

# ゴール(期待する動作など)

- MVPの一連の体験が最後まで動く。
- Plan.mdのMVP完了条件を満たしている。
- 実装後レビューで確認すべき観点が明確になっている。
