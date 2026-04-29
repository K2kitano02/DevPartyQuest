# Repository Guidelines

## プロジェクト構成とモジュール配置

このリポジトリは、React + TypeScript で作る **Dev Party Quest** の初期段階プロジェクトです。アプリ概要は `README.md`、詳細仕様と実装計画は `.codex/Plan.md`、実装Issue一覧は `.codex/TODO.md` にあります。

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

現時点では `package.json` は未作成です。フロントエンドを作成したら、実際のスクリプトに合わせてこの節を更新してください。

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

## コーディング規約と命名

TypeScript で、ロールID、質問、回答、診断結果には明示的な型を定義してください。Reactコンポーネントは `QuestionCard.tsx` のように `PascalCase`、変数と関数は `camelCase` を使います。

診断タイプのキーは `productHero`、`uiMage`、`logicKnight` など `.codex/Plan.md` の表記に揃えてください。表示用コンポーネントにスコア計算ロジックを混ぜず、データ、ロジック、UIの責務を分けます。

## テスト方針

テストを追加する場合は、スコア計算、同点時の優先順位、もう一度診断する処理、X共有URL生成を優先してください。想定ツールは Vitest と React Testing Library です。

テストファイルは対象ファイルの近くに置き、`src/data/questions.test.ts` や `src/App.test.tsx` のように命名します。同点処理は表示結果に直結するため必ず確認してください。

## コミットとプルリクエスト

このディレクトリは現在 git リポジトリではないため、既存のコミット規約は確認できません。コミットメッセージは `Add diagnosis question data`、`Implement result sharing` のように短い命令形を推奨します。

プルリクエストには、変更概要、UI変更のスクリーンショットまたは録画、実行したテスト結果を含めてください。診断ロジック、質問文、結果文を変更した場合は、その影響も明記します。

## エージェント向け注意事項

作業前に `README.md`、`.codex/Plan.md`、`.codex/TODO.md` を確認してください。MVPの範囲は、フロントエンドのみ、8問診断、決定的なスコア計算、再診断、X共有です。関連しない機能追加や大きな設計変更は避けてください。

`.codex/TODO.md` は、`.codex/Plan.md` を仕様の正とした実装Issue一覧です。実装作業は `TODO.md` のIssue順に進め、仕様の解釈に迷った場合は `Plan.md` を優先してください。

## サブエージェント

Planner、Generator、Evaluator の役割定義は `.codex/agents/` にあります。

- Planner: 短い依頼を製品仕様書とスプリント計画に展開します。
- Generator: 仕様書に従い、1スプリント1機能ずつ実装します。
- Evaluator: Playwright MCP で実際に操作し、合否と修正点を返します。

詳細は `.codex/agents/README.md` を確認してください。
