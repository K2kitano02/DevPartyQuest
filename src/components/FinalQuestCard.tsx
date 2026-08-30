import { finalQuestOptions } from "../data/finalQuestOptions";
import type { RoleType } from "../types/diagnosis";
import AnswerButton from "./AnswerButton";

type FinalQuestCardProps = {
  roleTypes: RoleType[];
  onBack: () => void;
  onSelect: (roleType: RoleType) => void;
};

function FinalQuestCard({ roleTypes, onBack, onSelect }: FinalQuestCardProps) {
  return (
    <section className="quest-panel w-full p-5 text-white sm:p-8">
      <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
        <p className="text-sm font-black text-yellow-300 uppercase">
          FINAL QUEST
        </p>
        <button
          className="quest-button-secondary min-h-10 px-4 py-2 text-sm font-bold text-slate-100 transition active:translate-x-1 active:translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-yellow-200"
          type="button"
          onClick={onBack}
        >
          前の質問に戻る
        </button>
      </div>
      <h1 className="mt-3 text-3xl leading-tight font-black drop-shadow-[4px_4px_0_rgba(0,0,0,1)] sm:text-4xl">
        最後の選択
      </h1>
      <p className="mt-4 leading-relaxed text-slate-200">
        複数の適性が同点でした。より普段の自分に近い行動を選んでください。
      </p>

      <div className="mt-6 grid gap-3">
        {roleTypes.map((roleType) => (
          <AnswerButton
            key={roleType}
            text={finalQuestOptions[roleType]}
            onClick={() => onSelect(roleType)}
          />
        ))}
      </div>
    </section>
  );
}

export default FinalQuestCard;
