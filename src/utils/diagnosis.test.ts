import { describe, expect, it } from "vitest";

import {
  addScores,
  calculateResult,
  initialScores,
  rolePriority,
} from "./diagnosis";
import type { Scores } from "../types/diagnosis";

describe("diagnosis utils", () => {
  it("初期スコアは全タイプを0で持つ", () => {
    expect(initialScores).toEqual({
      productHero: 0,
      uiMage: 0,
      logicKnight: 0,
      bugHunter: 0,
      strategySage: 0,
      communicationPriest: 0,
      speedNinja: 0,
      refactorBlacksmith: 0,
    });
  });

  it("同点時の優先順位をPlan.md通りに持つ", () => {
    expect(rolePriority).toEqual([
      "productHero",
      "uiMage",
      "logicKnight",
      "bugHunter",
      "strategySage",
      "communicationPriest",
      "speedNinja",
      "refactorBlacksmith",
    ]);
  });

  it("回答スコアを現在のスコアに加算する", () => {
    const currentScores: Scores = {
      ...initialScores,
      productHero: 1,
      logicKnight: 2,
    };

    expect(addScores(currentScores, { productHero: 2, uiMage: 1 })).toEqual({
      ...initialScores,
      productHero: 3,
      uiMage: 1,
      logicKnight: 2,
    });
  });

  it("加算時に元のスコアを変更しない", () => {
    const currentScores: Scores = {
      ...initialScores,
      productHero: 1,
    };

    const nextScores = addScores(currentScores, { productHero: 2 });

    expect(nextScores).not.toBe(currentScores);
    expect(currentScores.productHero).toBe(1);
  });

  it("最もスコアが高いタイプを結果として返す", () => {
    expect(
      calculateResult({
        ...initialScores,
        bugHunter: 3,
        logicKnight: 2,
      }),
    ).toBe("bugHunter");
  });

  it("同点の場合はrolePriorityで先に定義されたタイプを返す", () => {
    expect(
      calculateResult({
        ...initialScores,
        logicKnight: 4,
        bugHunter: 4,
      }),
    ).toBe("logicKnight");
  });
});
