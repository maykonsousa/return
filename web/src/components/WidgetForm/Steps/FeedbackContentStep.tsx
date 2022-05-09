import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbacksTypes, feedbackType } from "../../../utils/types";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  type: feedbackType;
  onRestart: () => void;
  onFeedbackSent: () => void;
}

export const FeedbackContentStep = ({
  type,
  onRestart,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const { title, image } = feedbacksTypes[type];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Feedback:", comment);
    console.log("Screenshot:", screenshot);
    onFeedbackSent();
  };
  return (
    <>
      <header>
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={onRestart}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={image.src} alt={image.alt} className="w-6 h-6" />
          {title}
        </span>

        <CloseButton />
      </header>
      <div className="w-[304px]">
        <form onSubmit={(e) => handleSubmit(e)} className="my-4 w-full">
          <textarea
            className="min-w[304px] w-full min-h[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none focus:outline-none  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            placeholder="Conte com detalhes o que está acontecendo..."
            onChange={(e) => setComment(e.target.value)}
          />
          <footer className="flex gap-2 mt-2">
            <ScreenshotButton
              screenshot={screenshot}
              onScreenshotTook={setScreenshot}
            />
            <button
              type="submit"
              className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex-justify-center items-center hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-brand-500"
              disabled={comment.length === 0}
            >
              Enviar Feedback
            </button>
          </footer>
        </form>
      </div>
    </>
  );
};
