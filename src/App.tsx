import { useState } from "react";

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
      <section className="w-full max-w-2xl rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/30 sm:p-8">
        <p className="text-sm font-bold text-cyan-300">Question 1 / 8</p>
        <h1 className="mt-3 text-3xl leading-tight font-black">
          {firstQuestion.text}
        </h1>
      </section>
    </main>
  );
}

export default App;
