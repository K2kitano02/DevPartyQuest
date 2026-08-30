import type { RoleType } from "../types/diagnosis";

export const finalQuestOptions: Record<RoleType, string> = {
  productHero: "まず、誰のどんな課題を解決する機能なのか考える",
  uiMage: "まず、画面の見やすさや操作の分かりやすさを考える",
  logicKnight: "複雑な処理を小さく分け、順番に組み立てる",
  bugHunter: "動いた後も、想定外の操作や違和感がないか確認する",
  strategySage: "実装前に、必要なデータや処理の流れを整理する",
  communicationPriest: "困ったときは、状況を言葉にしてチームへ共有する",
  speedNinja: "まず最低限動くものを作り、そこから考える",
  refactorBlacksmith: "一度作ったものを、読みやすく使いやすい形へ整える",
};
