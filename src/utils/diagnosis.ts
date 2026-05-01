import type { AnswerScores, RoleType, Scores } from "../types/diagnosis";

export const initialScores: Scores = {
  productHero: 0,
  uiMage: 0,
  logicKnight: 0,
  bugHunter: 0,
  strategySage: 0,
  communicationPriest: 0,
  speedNinja: 0,
  refactorBlacksmith: 0,
};

export const rolePriority: RoleType[] = [
  "productHero",
  "uiMage",
  "logicKnight",
  "bugHunter",
  "strategySage",
  "communicationPriest",
  "speedNinja",
  "refactorBlacksmith",
];

export function addScores(
  currentScores: Scores,
  answerScores: AnswerScores,
): Scores {
  const nextScores: Scores = { ...currentScores };

  rolePriority.forEach((roleType) => {
    nextScores[roleType] += answerScores[roleType] ?? 0;
  });

  return nextScores;
}

export function calculateResult(scores: Scores): RoleType {
  return rolePriority.reduce((bestRole, roleType) => {
    return scores[roleType] > scores[bestRole] ? roleType : bestRole;
  }, rolePriority[0]);
}
