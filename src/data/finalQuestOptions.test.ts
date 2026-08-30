import { describe, expect, it } from "vitest";

import type { RoleType } from "../types/diagnosis";
import { finalQuestOptions } from "./finalQuestOptions";

const roleTypes: RoleType[] = [
  "productHero",
  "uiMage",
  "logicKnight",
  "bugHunter",
  "strategySage",
  "communicationPriest",
  "speedNinja",
  "refactorBlacksmith",
];

describe("finalQuestOptions", () => {
  it("8タイプすべての最終選択文を持つ", () => {
    expect(Object.keys(finalQuestOptions)).toEqual(roleTypes);

    roleTypes.forEach((roleType) => {
      expect(finalQuestOptions[roleType]).not.toHaveLength(0);
    });
  });
});
