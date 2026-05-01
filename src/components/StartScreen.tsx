type StartScreenProps = {
  onStart: () => void;
};

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-5 py-12 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-normal text-cyan-300">
            あなたの開発パーティーロール診断
          </p>
          <h1 className="mt-4 text-5xl leading-tight font-black sm:text-7xl">
            Dev Party Quest
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            8つの質問に答えて、自分が開発パーティーの中でどんな役割を担いやすいかを診断します。
            結果はRPGの職業風に表示され、チーム開発での強みを楽しく振り返れます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-slate-950">
            <span className="rounded-md bg-cyan-200 px-3 py-2">8問診断</span>
            <span className="rounded-md bg-amber-200 px-3 py-2">
              開発ロール8タイプ
            </span>
            <span className="rounded-md bg-emerald-200 px-3 py-2">
              X共有対応
            </span>
          </div>
          <button
            className="mt-10 min-h-12 rounded-lg bg-amber-300 px-6 text-base font-black text-slate-950 transition hover:bg-amber-200 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            type="button"
            onClick={onStart}
          >
            診断を始める
          </button>
        </div>
      </section>
    </main>
  );
}

export default StartScreen;
