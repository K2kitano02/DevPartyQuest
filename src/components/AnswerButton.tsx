type AnswerButtonProps = {
  text: string;
  onClick: () => void;
};

function AnswerButton({ text, onClick }: AnswerButtonProps) {
  return (
    <button
      className="quest-button-secondary min-h-14 w-full px-4 py-3 text-left font-bold text-slate-100 transition active:translate-x-1 active:translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-yellow-200"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default AnswerButton;
