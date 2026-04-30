import { describe, expectTypeOf, it } from "vitest";

import type {
  Answer,
  AppStep,
  Question,
  Result,
  RoleType,
  Scores,
} from "./diagnosis";

describe("diagnosis types", () => {
  it("診断タイプのキーをPlan.mdの8種類に固定できる", () => {
    expectTypeOf<RoleType>().toEqualTypeOf<
      | "productHero"
      | "uiMage"
      | "logicKnight"
      | "bugHunter"
      | "strategySage"
      | "communicationPriest"
      | "speedNinja"
      | "refactorBlacksmith"
    >();
  });

  it("スコアは全診断タイプの数値を持つ", () => {
    expectTypeOf<Scores>().toEqualTypeOf<Record<RoleType, number>>();
  });

  it("回答は加点対象の診断タイプだけを持てる", () => {
    expectTypeOf<Answer["scores"]>().toEqualTypeOf<Partial<Scores>>();
  });

  it("質問はID、質問文、回答一覧を持つ", () => {
    expectTypeOf<Question>().toEqualTypeOf<{
      id: number;
      text: string;
      answers: Answer[];
    }>();
  });

  it("結果データは表示文言と相性ロールを持つ", () => {
    expectTypeOf<Result["compatibility"]["good"]>().toEqualTypeOf<RoleType[]>();
    expectTypeOf<Result["strengths"]>().toEqualTypeOf<string[]>();
  });

  it("画面状態は開始、質問、結果の3種類に固定する", () => {
    expectTypeOf<AppStep>().toEqualTypeOf<"start" | "question" | "result">();
  });
});
