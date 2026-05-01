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
        <span className="text-cyan-300">Question</span>
        <span className="text-white">
          {currentQuestionNumber} / {totalQuestions}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/15">
        <div
          className="h-full rounded-full bg-cyan-300 transition-[width] duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
