import { useState } from "react";

import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";
import StartScreen from "./components/StartScreen";
import { questions } from "./data/questions";
import { results } from "./data/results";
import type { Answer, AppStep, RoleType, Scores } from "./types/diagnosis";
import { addScores, calculateResult, initialScores } from "./utils/diagnosis";
import { shareToX } from "./utils/share";

function App() {
  const [step, setStep] = useState<AppStep>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(initialScores);
  const [scoreHistory, setScoreHistory] = useState<Scores[]>([]);
  const [resultType, setResultType] = useState<RoleType | null>(null);

  function handleStart() {
    setStep("question");
    setCurrentQuestionIndex(0);
    setScores(initialScores);
    setScoreHistory([]);
    setResultType(null);
  }

  function handleAnswer(answer: Answer) {
    const nextScores = addScores(scores, answer.scores);
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    setScores(nextScores);
    setScoreHistory((history) => [...history, scores]);

    if (isLastQuestion) {
      setResultType(calculateResult(nextScores));
      setStep("result");
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
  }

  function handleBack() {
    if (currentQuestionIndex === 0) {
      return;
    }

    const previousScores = scoreHistory[scoreHistory.length - 1] ?? initialScores;

    setCurrentQuestionIndex((index) => Math.max(index - 1, 0));
    setScores(previousScores);
    setScoreHistory((history) => history.slice(0, -1));
    setResultType(null);
  }

  function handleRestart() {
    setStep("start");
    setCurrentQuestionIndex(0);
    setScores(initialScores);
    setScoreHistory([]);
    setResultType(null);
  }

  if (step === "start") {
    return <StartScreen onStart={handleStart} />;
  }

  if (step === "result" && resultType !== null) {
    return (
      <main className="quest-bg grid min-h-screen place-items-center px-4 py-8 sm:px-5 sm:py-10">
        <div className="quest-content w-full max-w-3xl">
          <ResultCard
            result={results[resultType]}
            onRestart={handleRestart}
            onShare={() => shareToX(results[resultType])}
          />
        </div>
      </main>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <main className="quest-bg grid min-h-screen place-items-center px-4 py-8 text-white sm:px-5 sm:py-10">
      <div className="quest-content w-full max-w-2xl">
        <QuestionCard
          question={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          canGoBack={currentQuestionIndex > 0}
          onBack={handleBack}
          onAnswer={handleAnswer}
        />
      </div>
    </main>
  );
}

export default App;
