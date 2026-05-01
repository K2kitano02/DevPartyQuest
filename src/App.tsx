import { useState } from "react";

import QuestionCard from "./components/QuestionCard";
import StartScreen from "./components/StartScreen";
import { questions } from "./data/questions";
import type { AppStep } from "./types/diagnosis";

function App() {
  const [step, setStep] = useState<AppStep>("start");

  if (step === "start") {
    return <StartScreen onStart={() => setStep("question")} />;
  }

  const firstQuestion = questions[0];

  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-5 py-10 text-white">
      <QuestionCard
        question={firstQuestion}
        currentQuestionIndex={0}
        totalQuestions={questions.length}
        onAnswer={() => {}}
      />
    </main>
  );
}

export default App;
