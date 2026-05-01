type ProgressBarProps = {
  currentQuestionIndex: number;
  totalQuestions: number;
};

function ProgressBar({
  currentQuestionIndex,
  totalQuestions,
}: ProgressBarProps) {
  const currentQuestionNumber = currentQuestionIndex + 1;
  const progressPercent =
    totalQuestions > 0 ? (currentQuestionNumber / totalQuestions) * 100 : 0;

  return (
    <div aria-label="診断の進捗" className="space-y-2">
      <div className="flex items-center justify-between text-sm font-bold">
        <span className="text-yellow-300 uppercase">Question</span>
        <span className="text-slate-100">
          {currentQuestionNumber} / {totalQuestions}
        </span>
      </div>
      <div className="relative h-3 overflow-hidden border border-white bg-slate-950">
        <div
          className="h-full bg-yellow-400 transition-[width] duration-300"
          style={{ width: `${progressPercent}%` }}
        />
        <div className="absolute inset-0 grid grid-cols-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="border-r border-black/30 last:border-r-0" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
