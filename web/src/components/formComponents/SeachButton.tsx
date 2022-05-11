import { MagnifyingGlass } from "phosphor-react";
import { Loading } from "../Loading";

interface ISearchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  loading: boolean;
  type: "submit" | "button";
  disabled?: boolean;
  onClick?: () => any;
}

export const SearchButton = ({
  className,
  loading,
  type,
  disabled,
  onClick,
}: ISearchButtonProps) => {
  return (
    <div className="mt-2">
      <div>
        <button
          className={`p-1 w-10 h-10 bg-zinc-800 rounded-md border-transparent  flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors disabled:cursor-not-allowed  ${className}`}
          type={type}
          disabled={disabled}
          onClick={onClick}
        >
          {loading ? <Loading /> : <MagnifyingGlass size={32} weight="fill" />}
        </button>
      </div>
    </div>
  );
};
