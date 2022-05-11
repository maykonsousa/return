import { Loading } from "../Loading";

interface ISubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  text: string;
  loading: boolean;
}

export const SubmitButton = ({
  type,
  onClick,
  text,
  loading,
}: ISubmitButtonProps) => {
  return (
    <div className="mt-6">
      <button
        type={type}
        onClick={onClick}
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
      >
        <span className="flex items-center justify-center">
          {loading ? <Loading /> : text}
        </span>
      </button>
    </div>
  );
};
