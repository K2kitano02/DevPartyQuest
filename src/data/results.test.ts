import { describe, expect, it } from "vitest";

import { results } from "./results";
import type { RoleType } from "../types/diagnosis";

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

describe("results", () => {
  it("Plan.mdで定義された8タイプ分の結果データを持つ", () => {
    expect(Object.keys(results)).toEqual(roleTypes);
  });

  it("各結果データのキーとtypeが一致する", () => {
    roleTypes.forEach((roleType) => {
      expect(results[roleType].type).toBe(roleType);
    });
  });

  it("結果画面に必要な表示文言をすべて持つ", () => {
    roleTypes.forEach((roleType) => {
      const result = results[roleType];

      expect(result.typeName).not.toHaveLength(0);
      expect(result.jobName).not.toHaveLength(0);
      expect(result.catchCopy).not.toHaveLength(0);
      expect(result.description).not.toHaveLength(0);
      expect(result.strengths).toHaveLength(3);
      expect(result.weakness).not.toHaveLength(0);
      expect(result.teamRole).not.toHaveLength(0);
      expect(result.compatibility.message).not.toHaveLength(0);
    });
  });

  it("相性の良いタイプは表示名ではなくRoleTypeで保持する", () => {
    roleTypes.forEach((roleType) => {
      results[roleType].compatibility.good.forEach((compatibleRole) => {
        expect(roleTypes).toContain(compatibleRole);
      });
    });
  });
});
