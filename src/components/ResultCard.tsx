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
    <section className="w-full max-w-2xl rounded-lg border border-white/15 bg-white/10 p-6 text-white shadow-2xl shadow-black/30 sm:p-8">
      <p className="text-sm font-bold text-cyan-300">診断結果</p>
      <div className="mt-3">
        <p className="text-base font-bold text-white/70">{result.jobName}</p>
        <h1 className="mt-1 text-4xl leading-tight font-black">
          {result.typeName}
        </h1>
      </div>

      <p className="mt-4 text-lg leading-relaxed font-bold text-amber-200">
        {result.catchCopy}
      </p>
      <p className="mt-4 leading-relaxed text-white/85">
        {result.description}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <section className="rounded-lg border border-white/15 bg-slate-950/40 p-4">
          <h2 className="text-sm font-bold text-cyan-300">強み</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/85">
            {result.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-white/15 bg-slate-950/40 p-4">
          <h2 className="text-sm font-bold text-cyan-300">気をつけたいこと</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            {result.weakness}
          </p>
        </section>
      </div>

      <section className="mt-4 rounded-lg border border-white/15 bg-slate-950/40 p-4">
        <h2 className="text-sm font-bold text-cyan-300">チームでの立ち回り</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/85">
          {result.teamRole}
        </p>
      </section>

      <section className="mt-4 rounded-lg border border-white/15 bg-slate-950/40 p-4">
        <h2 className="text-sm font-bold text-cyan-300">相性の良いタイプ</h2>
        <p className="mt-3 text-sm font-bold text-white">
          {compatibleTypeNames.join(" / ")}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/85">
          {result.compatibility.message}
        </p>
      </section>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          className="min-h-12 rounded-lg border border-white/15 bg-white/10 px-4 py-3 font-bold text-white transition hover:border-cyan-300/70 hover:bg-cyan-300/15 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-300"
          type="button"
          onClick={onRestart}
        >
          もう一度診断する
        </button>
        <button
          className="min-h-12 rounded-lg border border-cyan-300/70 bg-cyan-300 px-4 py-3 font-black text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-300"
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
