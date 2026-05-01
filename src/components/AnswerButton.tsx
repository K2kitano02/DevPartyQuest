type AnswerButtonProps = {
  text: string;
  onClick: () => void;
};

function AnswerButton({ text, onClick }: AnswerButtonProps) {
  return (
    <button
      className="min-h-14 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-left font-bold text-white transition hover:border-cyan-300/70 hover:bg-cyan-300/15 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-300"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default AnswerButton;
