export type RoleType =
  | "productHero"
  | "uiMage"
  | "logicKnight"
  | "bugHunter"
  | "strategySage"
  | "communicationPriest"
  | "speedNinja"
  | "refactorBlacksmith";

export type Scores = Record<RoleType, number>;

// 回答は1つまたは複数のロールだけに加点できるため、Partialで表します。
export type AnswerScores = Partial<Scores>;

export type Answer = {
  text: string;
  scores: AnswerScores;
};

export type Question = {
  id: number;
  text: string;
  answers: Answer[];
};

export type Result = {
  type: RoleType;
  typeName: string;
  jobName: string;
  catchCopy: string;
  description: string;
  strengths: string[];
  weakness: string;
  teamRole: string;
  compatibility: {
    good: RoleType[];
    message: string;
  };
};

export type AppStep = "start" | "question" | "result";
