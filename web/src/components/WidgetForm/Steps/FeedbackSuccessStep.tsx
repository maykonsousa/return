import { CloseButton } from "../../CloseButton";
import successImg from "../../../assets/success.svg";

interface FeedbackSuccessStepProps {
  onRestart: () => void;
}

export const FeedbackSuccessStep = ({
  onRestart,
}: FeedbackSuccessStepProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImg} alt="Imagem de sucesso" />
        <span className="text-xl mt-2">Agradecemos o feedBack</span>
        <button
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700"
          onClick={onRestart}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};
