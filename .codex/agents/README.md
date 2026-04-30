# Sub-Agent Workflow

このディレクトリは、Dev Party Quest の開発を進めるためのサブエージェント定義を管理します。

`.codex/TODO.md` は、`.codex/Plan.md` を仕様の正として作成された実装Issue一覧です。Test Writer は `TODO.md` のIssueごとに実装前テストを作成し、Generator は `TODO.md` のIssue順に実装し、Evaluator は対象Issueのゴールと受け入れ観点を確認します。

## エージェント構成

- `planner.md`: 1〜4行の依頼を、実装に使える製品仕様書とスプリント計画へ展開します。
- `test-writer.md`: 対象Issueの仕様と受け入れ基準から、実装前に失敗するテストを作成します。
- `generator.md`: 仕様書のスプリントを1つずつ実装し、完了時に自己評価を行います。
- `evaluator.md`: Playwright MCP を使って実際の画面を操作し、合否と修正フィードバックを返します。

## 基本フロー

1. Planner がユーザーの短い依頼から製品仕様書を作る。
2. Test Writer が対象Issueの受け入れ基準から、先に失敗するテストを書く。
3. Generator がテストと仕様を確認し、対象Issueを実装する。
4. Generator が自己評価レポートを作る。
5. Evaluator がアプリを操作して検証し、基準を満たすか判定する。
6. 不合格の場合、Generator がフィードバックに基づいて同じスプリントを修正する。
7. 合格後、次のスプリントへ進む。

## 重要な境界

Planner は「何を作るか」を定義し、「どう作るか」の細かい技術指定は避けます。

Test Writer は「正しさをどう確認するか」をテストで定義します。実装コードは変更せず、Generator が満たすべき期待値を明確にします。

Generator は技術選定と実装を担当します。ただし、このリポジトリでは `README.md`、`.codex/Plan.md`、`.codex/TODO.md`、`AGENTS.md` のMVP範囲とIssue順を優先します。

Evaluator はユーザー視点の動作確認を担当します。実装方針の好みではなく、仕様・操作・表示・回帰リスクに基づいて判定します。
