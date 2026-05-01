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
    <section className="w-full max-w-2xl rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/30 sm:p-8">
      <ProgressBar
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
      />
      <h1 className="mt-5 text-3xl leading-tight font-black">
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
