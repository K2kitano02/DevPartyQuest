import { describe, expect, it } from "vitest";

import { questions } from "./questions";
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

describe("questions", () => {
  it("Plan.mdで定義された8問を順番通りに持つ", () => {
    expect(questions).toHaveLength(8);
    expect(questions.map((question) => question.id)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
  });

  it("各質問は4つの回答選択肢を持つ", () => {
    questions.forEach((question) => {
      expect(question.text).not.toHaveLength(0);
      expect(question.answers).toHaveLength(4);
    });
  });

  it("各回答は表示文言と加点ルールを持つ", () => {
    questions.forEach((question) => {
      question.answers.forEach((answer) => {
        expect(answer.text).not.toHaveLength(0);
        expect(Object.keys(answer.scores).length).toBeGreaterThan(0);
      });
    });
  });

  it("スコア加点対象はRoleTypeだけを使う", () => {
    questions.forEach((question) => {
      question.answers.forEach((answer) => {
        Object.keys(answer.scores).forEach((roleType) => {
          expect(roleTypes).toContain(roleType);
        });
      });
    });
  });

  it("Plan.md通りの加点ルールを持つ", () => {
    expect(questions.map((question) => question.answers.map((answer) => answer.scores))).toEqual([
      [
        { productHero: 2 },
        { uiMage: 2 },
        { logicKnight: 2 },
        { bugHunter: 2 },
      ],
      [
        { productHero: 1, strategySage: 1 },
        { bugHunter: 1, logicKnight: 1 },
        { speedNinja: 1, logicKnight: 1 },
        { communicationPriest: 1, strategySage: 1 },
      ],
      [
        { productHero: 2 },
        { uiMage: 2 },
        { strategySage: 2 },
        { communicationPriest: 2 },
      ],
      [
        { speedNinja: 2 },
        { strategySage: 1, logicKnight: 1 },
        { uiMage: 2 },
        { bugHunter: 1, refactorBlacksmith: 1 },
      ],
      [
        { productHero: 1, uiMage: 1 },
        { logicKnight: 1, refactorBlacksmith: 1 },
        { bugHunter: 2 },
        { strategySage: 1, refactorBlacksmith: 1 },
      ],
      [
        { speedNinja: 2 },
        { strategySage: 1, productHero: 1 },
        { uiMage: 1, refactorBlacksmith: 1 },
        { bugHunter: 1, logicKnight: 1 },
      ],
      [
        { productHero: 1, uiMage: 1 },
        { logicKnight: 2 },
        { bugHunter: 2 },
        { communicationPriest: 2 },
      ],
      [
        { productHero: 2 },
        { logicKnight: 2 },
        { strategySage: 1, refactorBlacksmith: 1 },
        { communicationPriest: 2 },
      ],
    ]);
  });
});
