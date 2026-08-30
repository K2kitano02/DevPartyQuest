import { describe, expect, it } from "vitest";

import {
  addScores,
  getTopRoles,
  initialScores,
  roleTypes,
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

  it("Plan.mdで定義された8タイプを順番通りに持つ", () => {
    expect(roleTypes).toEqual([
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

  it("単独で最もスコアが高いタイプだけを返す", () => {
    expect(
      getTopRoles({
        ...initialScores,
        bugHunter: 3,
        logicKnight: 2,
      }),
    ).toEqual(["bugHunter"]);
  });

  it("最高点が2タイプ同点なら両方を返す", () => {
    expect(
      getTopRoles({
        ...initialScores,
        logicKnight: 4,
        bugHunter: 4,
      }),
    ).toEqual(["logicKnight", "bugHunter"]);
  });

  it("最高点が3タイプ同点なら3タイプすべてを返す", () => {
    expect(
      getTopRoles({
        ...initialScores,
        productHero: 5,
        uiMage: 5,
        refactorBlacksmith: 5,
      }),
    ).toEqual(["productHero", "uiMage", "refactorBlacksmith"]);
  });
});
