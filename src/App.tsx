function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-linear-to-br from-stone-50 to-sky-100 px-4 py-8 text-slate-800">
      <section
        className="w-full max-w-2xl rounded-lg border border-slate-900/10 bg-white/90 p-7 shadow-2xl shadow-slate-900/10 sm:p-10"
        aria-labelledby="app-title"
      >
        <p className="mb-3 text-sm font-bold text-blue-700">
          デプロイ確認用テスト画面
        </p>
        <h1
          id="app-title"
          className="text-4xl leading-none font-bold sm:text-6xl"
        >
          Dev Party Quest
        </h1>
        <p className="mt-5 text-lg text-slate-600">
          React + TypeScript + Vite + Tailwind CSS で起動中
        </p>

        <div className="my-7 flex items-start gap-3 rounded-lg border border-blue-700/20 bg-sky-50 p-5">
          <span
            className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-green-600 shadow-[0_0_0_6px_rgba(22,163,74,0.12)]"
            aria-hidden="true"
          />
          <div>
            <p className="font-bold">Issue 0</p>
            <p className="mt-1 text-slate-600">
              以降の診断画面を実装するための土台が動いています。
            </p>
          </div>
        </div>

        <button
          className="min-h-11 rounded-lg bg-blue-800 px-5 font-bold text-white transition hover:bg-blue-900"
          type="button"
        >
          起動確認OK
        </button>
      </section>
    </main>
  );
}

export default App;
