import { feedbacksTypes, feedbackType } from "../../../utils/types";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  OnchangeType: (key: feedbackType) => void;
}

export const FeedbackTypeStep = ({ OnchangeType }: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe o seu Feedback</span>
        <CloseButton />
      </header>
      <main className="flex gap-2 py-8 w-full">
        {Object.entries(feedbacksTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => OnchangeType(key as feedbackType)}
              className="bg-zinc-800 p-4 relative rounded-lg py-5 w-24 flex-1 flex flex-col items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500"
            >
              <img src={value.image.src} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </main>
    </>
  );
};
