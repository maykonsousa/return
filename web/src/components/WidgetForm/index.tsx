import { CloseButton } from "../CloseButton";

import { useState } from "react";
import { feedbacksTypes, feedbackType } from "../../utils/types";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const restartFeedbackRequest = () => {
    setFeedbackType(null);
    setFeedbackSent(false);
  };
  return (
    <div className="bg-zinc-900 p-4 mb-4  relative rounded-2xl flex flex-col shadow-lg items-center w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onRestart={restartFeedbackRequest} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep OnchangeType={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onRestart={restartFeedbackRequest}
              onFeedbackSent={() => setFeedbackSent(true)}
              type={feedbackType}
            />
          )}
        </>
      )}
      <footer>
        <span className="text-xs text-neutral-400">
          Feito com ♥ pela{" "}
          <a
            className="underline underline-offset-2"
            href="http://www.rocketseat.com"
          >
            Rocketseat
          </a>
        </span>
      </footer>
    </div>
  );
};
