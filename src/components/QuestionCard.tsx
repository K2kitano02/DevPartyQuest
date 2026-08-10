import type { Answer, Question } from "../types/diagnosis";
import AnswerButton from "./AnswerButton";
import ProgressBar from "./ProgressBar";

type QuestionCardProps = {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  canGoBack: boolean;
  onBack: () => void;
  onAnswer: (answer: Answer) => void;
};

function QuestionCard({
  question,
  currentQuestionIndex,
  totalQuestions,
  canGoBack,
  onBack,
  onAnswer,
}: QuestionCardProps) {
  return (
    <section className="quest-panel w-full p-5 text-white sm:p-8">
      <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
        <ProgressBar
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
        />
        {canGoBack ? (
          <button
            className="quest-button-secondary min-h-10 px-4 py-2 text-sm font-bold text-slate-100 transition active:translate-x-1 active:translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-yellow-200"
            type="button"
            onClick={onBack}
          >
            前の質問に戻る
          </button>
        ) : null}
      </div>
      <h1 className="mt-6 text-2xl leading-tight font-black drop-shadow-[3px_3px_0_rgba(0,0,0,1)] sm:text-3xl">
        {question.text}
      </h1>
      <div className="mt-6 grid gap-3">
        {question.answers.map((answer) => (
          <AnswerButton
            key={answer.text}
            text={answer.text}
            onClick={() => onAnswer(answer)}
          />
        ))}
      </div>
    </section>
  );
}

export default QuestionCard;
