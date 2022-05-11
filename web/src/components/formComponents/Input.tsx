interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
}

export const Input = ({
  placeholder,
  type,
  className,
  onChange,
  value,
  disabled,
}: InputProps) => {
  return (
    <div className="mt-4 flex-1 ">
      <input
        placeholder={placeholder}
        type={type ?? "text"}
        onChange={onChange}
        className={`block flex-1 w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};
