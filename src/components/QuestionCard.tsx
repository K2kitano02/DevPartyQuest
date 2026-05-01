import type { Answer, Question } from "../types/diagnosis";
import AnswerButton from "./AnswerButton";
import ProgressBar from "./ProgressBar";

type QuestionCardProps = {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (answer: Answer) => void;
};

function QuestionCard({
  question,
  currentQuestionIndex,
  totalQuestions,
  onAnswer,
}: QuestionCardProps) {
  return (
    <section className="quest-panel w-full p-5 text-white sm:p-8">
      <ProgressBar
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
      />
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
