type StartScreenProps = {
  onStart: () => void;
};

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <main className="quest-bg min-h-screen text-white">
      <section className="quest-content mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-4 py-10 sm:px-8 items-center">
        <div className="quest-panel w-full max-w-3xl p-6 text-center sm:p-10">
          <p className="text-sm font-black text-yellow-300 uppercase">
            あなたの開発パーティーロール診断
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-black text-white uppercase italic drop-shadow-[4px_4px_0_rgba(0,0,0,1)] sm:text-6xl">
            Dev Party Quest
          </h1>
          <div className="relative mt-5 h-3 overflow-hidden border border-white bg-slate-950">
            <div className="h-full w-3/4 bg-yellow-400" />
            <div className="absolute inset-0 grid grid-cols-10">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  className="border-r border-black/30 last:border-r-0"
                  key={index}
                />
              ))}
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">
            8つの質問に答えて、自分が開発パーティーの中でどんな役割を担いやすいかを診断します。
            結果はRPGの職業風に表示され、チーム開発での強みを楽しく振り返れます。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-black text-slate-950">
            <span className="border-2 border-white bg-slate-900 px-3 py-2 text-yellow-300 shadow-[4px_4px_0_#000]">
              8問診断
            </span>
            <span className="border-2 border-white bg-slate-900 px-3 py-2 text-yellow-300 shadow-[4px_4px_0_#000]">
              開発ロール8タイプ
            </span>
            <span className="border-2 border-white bg-slate-900 px-3 py-2 text-yellow-300 shadow-[4px_4px_0_#000]">
              X共有対応
            </span>
          </div>
          <button
            className="quest-button-primary mt-10 min-h-14 px-8 py-3 text-xl font-black transition focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-yellow-200 sm:px-10 sm:text-2xl"
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
