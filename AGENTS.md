# 重要
実装は講座式に進めてください。各Issueでは、いきなり大きく実装せず、目的、作るファイル、主要なコード、確認方法を短く説明しながら進めます。
コードは学習の助けになる箇所に限り、役割や目的を振り返れるコメントを残してください。自明な処理への過剰なコメントは避けてください。
ユーザーが学習しやすいように、重要な判断や詰まりやすい点は作業前後に補足してください。

説明文、PR本文、レビューコメントなど、ユーザーに見せる文章は日本語で記載してください。git commit メッセージだけは「コミットとプルリクエスト」の形式に従い、`Add:` や `Implement:` などの英語prefixと日本語の要約を組み合わせます。

# Repository Guidelines

## プロジェクト構成とモジュール配置

このリポジトリは、React + TypeScript + Tailwind CSS で作る **Dev Party Quest** の初期段階プロジェクトです。アプリ概要は `README.md`、詳細仕様と実装計画は `.codex/Plan.md`、実装Issue一覧は `.codex/TODO.md` にあります。

実装時は次の構成を基本にしてください。

```txt
src/
  components/     # AnswerButton、ProgressBar、各種カードなどのUI部品
  data/           # 質問データ、診断結果データ
  types/          # diagnosis.ts などの共通型定義
  App.tsx
  main.tsx
```

MVPではバックエンド、認証、保存機能は使いません。質問と結果は `src/data/` の定数として管理します。

## ビルド・テスト・開発コマンド

フロントエンドは Vite で構成されています。開発や確認では `package.json` の scripts を使ってください。

Vite 構成を想定したコマンド例:

```sh
npm install       # 依存関係をインストール
npm run dev       # 開発サーバーを起動
npm run build     # 本番用ビルドを作成
npm run preview   # 本番ビルドをローカル確認
npm run lint      # lint がある場合に実行
npm test          # テストがある場合に実行
```

一時的なCLI実行よりも、`package.json` の scripts に登録して再利用できる形にしてください。

## デプロイと本番確認

本番環境は Vercel を使用します。

- 公開URL: https://devpartyquest.vercel.app/
- 本番URLは `README.md` に記録し、変更があれば同時に更新してください。
- UIやユーザーフローに影響するIssueでは、ローカル確認に加えて本番URLで主要画面を確認し、PR本文に確認結果を記載してください。
- Evaluator が本番確認を行う場合は、このURLを基準に表示、操作、コンソールエラー、ローカルとの差異を確認してください。

## コーディング規約と命名

TypeScript で、ロールID、質問、回答、診断結果には明示的な型を定義してください。Reactコンポーネントは `QuestionCard.tsx` のように `PascalCase`、変数と関数は `camelCase` を使います。

診断タイプのキーは `productHero`、`uiMage`、`logicKnight` など `.codex/Plan.md` の表記に揃えてください。表示用コンポーネントにスコア計算ロジックを混ぜず、データ、ロジック、UIの責務を分けます。

## テスト方針

テストを追加する場合は、スコア計算、同点時の優先順位、もう一度診断する処理、X共有URL生成を優先してください。想定ツールは Vitest と React Testing Library です。

テストファイルは対象ファイルの近くに置き、`src/data/questions.test.ts` や `src/App.test.tsx` のように命名します。同点処理は表示結果に直結するため必ず確認してください。

## コミットとプルリクエスト

git操作はユーザーが実装を確認し、指示した時のみに実行してください。
テストが通ったからといって自律的にgit操作をしないでください。
gitコマンドは目的と意図を説明し、ユーザーに許可を仰いでください。

コミットメッセージは `Add: 診断質問データを追加`、`Implement: 結果共有機能を実装` のように、英語prefixと日本語の要約を組み合わせた短い命令形を推奨します。

プルリクエストには、変更概要、UI変更のスクリーンショットまたは録画、実行したテスト結果を含めてください。診断ロジック、質問文、結果文を変更した場合は、その影響も明記します。
UIやユーザーフローに影響する変更では、本番URLで確認した結果もPR本文に含めてください。

git作業も講座式に進めてください。作業前に現在のブランチ、差分、リモート状態を確認し、何をコミットするかを説明してから進めます。

ブランチ名は必ず連番を含めてください。既存ブランチの最大番号を確認し、次の番号を使います。例: `feature/00_Startup` の次は `feature/01_update-agent-guidelines`、さらに次は `feature/02_issue0-vite-setup` のように命名します。

基本手順:

```sh
git status --short --branch
git switch main
git pull --ff-only
git switch -c feature/01_short-name
git add <changed-files>
git commit -m "Add: 変更内容を短く説明"
git push -u origin feature/01_short-name
gh pr create --base main --head feature/01_short-name
```

既存ブランチで作業する場合は、`git switch <branch-name>` 後に `git status --short --branch` で状態を確認します。PR作成後は、PRのURL、baseブランチ、headブランチ、作業ツリーがクリーンかを確認してください。

mainへマージ後は、次の手順でローカルmainを最新化します。

```sh
git switch main
git pull --ff-only
```

`gh` が使えない場合は、GitHubのPR作成URLを共有してください。認証やネットワーク権限が必要な操作は、実行前に何のための操作かを説明してください。

## エージェント向け注意事項

作業前に `README.md`、`.codex/Plan.md`、`.codex/TODO.md` を確認してください。MVPの範囲は、フロントエンドのみ、8問診断、決定的なスコア計算、再診断、X共有です。関連しない機能追加や大きな設計変更は避けてください。

`.codex/TODO.md` は、`.codex/Plan.md` を仕様の正とした実装Issue一覧です。実装作業は `TODO.md` のIssue順に進め、仕様の解釈に迷った場合は `Plan.md` を優先してください。

## Issue管理

完了したIssueはコメントアウトせず、`.codex/TODO.md` の該当Issue見出し直下に状態メタ情報を追記して管理してください。Issue本文は仕様や履歴として読み返せるように残します。

推奨形式:

```md
Status: Done
Branch: feature/04_issue1-vercel-deploy
PR: #5
Production URL: https://devpartyquest.vercel.app/
Verified:
- npm run build
- 本番URLでテスト画面表示
```

- 作業中のIssueは `Status: In Progress` とします。
- マージ済みで完了したIssueは `Status: Done` とします。
- 未着手のIssueには状態メタ情報を追加しなくて構いません。
- ブランチ名は作業単位の識別に使い、完了状態の正は `.codex/TODO.md` の `Status` とPR履歴で確認します。
- README には公開URLなど利用者やレビュアーが参照する情報を記録します。


## サブエージェント

Planner、Test Writer、Generator、Evaluator の役割定義は `.codex/agents/` にあります。

- Planner: 短い依頼を製品仕様書とスプリント計画に展開します。
- Test Writer: 対象Issueの仕様と受け入れ基準から、実装前に失敗するテストを作成します。
- Generator: 仕様書に従い、1スプリント1機能ずつ実装します。
- Evaluator: Playwright MCP で実際に操作し、合否と修正点を返します。

詳細は `.codex/agents/README.md` を確認してください。
