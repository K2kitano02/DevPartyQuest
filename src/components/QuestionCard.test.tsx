import { isValidElement, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import type { Answer, Question } from "../types/diagnosis";
import QuestionCard from "./QuestionCard";

type TestElementProps = {
  children?: ReactNode;
  onClick?: () => void;
  text?: string;
};

const question: Question = {
  id: 1,
  text: "開発していて一番テンションが上がる瞬間は？",
  answers: [
    {
      text: "使う人に「便利そう！」と言ってもらえたとき",
      scores: { productHero: 2 },
    },
    {
      text: "画面がいい感じに整ったとき",
      scores: { uiMage: 2 },
    },
    {
      text: "難しい処理が思った通りに動いたとき",
      scores: { logicKnight: 2 },
    },
    {
      text: "原因不明のエラーを倒したとき",
      scores: { bugHunter: 2 },
    },
  ],
};

function findAnswerButton(node: ReactNode, text: string): ReactNode {
  if (!isValidElement<TestElementProps>(node)) {
    return null;
  }

  if (node.props.text === text) {
    return node;
  }

  const children = node.props.children;

  if (Array.isArray(children)) {
    return children.map((child) => findAnswerButton(child, text)).find(Boolean) ?? null;
  }

  return findAnswerButton(children, text);
}

describe("QuestionCard", () => {
  it("進捗、質問文、4つの回答を表示する", () => {
    const html = renderToStaticMarkup(
      <QuestionCard
        question={question}
        currentQuestionIndex={0}
        totalQuestions={8}
        onAnswer={() => {}}
      />,
    );

    expect(html).toContain("1 / 8");
    expect(html).toContain(question.text);
    question.answers.forEach((answer) => {
      expect(html).toContain(answer.text);
    });
  });

  it("回答ボタン押下時に選択した回答を親へ渡す", () => {
    const onAnswer = vi.fn<(answer: Answer) => void>();
    const card = QuestionCard({
      question,
      currentQuestionIndex: 0,
      totalQuestions: 8,
      onAnswer,
    });
    const targetAnswer = question.answers[1];
    const button = findAnswerButton(card, targetAnswer.text);

    if (!isValidElement<TestElementProps>(button)) {
      throw new Error("回答ボタンが見つかりませんでした");
    }

    button.props.onClick?.();

    expect(onAnswer).toHaveBeenCalledWith(targetAnswer);
  });
});
