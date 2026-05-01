import { results } from "../data/results";
import type { Result } from "../types/diagnosis";

type ResultCardProps = {
  result: Result;
  onRestart: () => void;
  onShare: () => void;
};

function ResultCard({ result, onRestart, onShare }: ResultCardProps) {
  const compatibleTypeNames = result.compatibility.good.map(
    (role) => results[role].typeName,
  );

  return (
    <section className="quest-panel w-full p-5 text-white sm:p-8">
      <p className="text-sm font-black text-yellow-300 uppercase">診断結果</p>
      <div className="mt-3">
        <p className="text-base font-bold text-slate-300">{result.jobName}</p>
        <h1 className="mt-1 text-3xl leading-tight font-black drop-shadow-[4px_4px_0_rgba(0,0,0,1)] sm:text-4xl">
          {result.typeName}
        </h1>
      </div>

      <p className="mt-4 text-base leading-relaxed font-black text-yellow-300 sm:text-lg">
        {result.catchCopy}
      </p>
      <p className="mt-4 leading-relaxed text-slate-200">
        {result.description}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <section className="quest-inset p-4">
          <h2 className="text-sm font-black text-yellow-300">強み</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
            {result.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </section>

        <section className="quest-inset p-4">
          <h2 className="text-sm font-black text-yellow-300">気をつけたいこと</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            {result.weakness}
          </p>
        </section>
      </div>

      <section className="quest-inset mt-4 p-4">
        <h2 className="text-sm font-black text-yellow-300">チームでの立ち回り</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-200">
          {result.teamRole}
        </p>
      </section>

      <section className="quest-inset mt-4 p-4">
        <h2 className="text-sm font-black text-yellow-300">相性の良いタイプ</h2>
        <p className="mt-3 text-sm font-black text-white">
          {compatibleTypeNames.join(" / ")}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-200">
          {result.compatibility.message}
        </p>
      </section>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          className="quest-button-secondary min-h-12 px-4 py-3 font-bold text-white transition active:translate-x-1 active:translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-yellow-200"
          type="button"
          onClick={onRestart}
        >
          もう一度診断する
        </button>
        <button
          className="quest-button-primary min-h-12 px-4 py-3 font-black transition focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-yellow-200"
          type="button"
          onClick={onShare}
        >
          Xで共有
        </button>
      </div>
    </section>
  );
}

export default ResultCard;
