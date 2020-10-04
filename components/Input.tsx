type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  icon?: any;
  error?: boolean;
  placeholder?: string;
  className?: string;
};

const Input: React.FunctionComponent<InputProps> = (props) => {
  const margin = props.icon ? "px-12" : "px-4";
  const outline = props.error ? "border-red-500" : "border-black";
  const fieldClass = `appearance-none block w-full bg-white text-black placeholder-gray-700 border-4 border-black rounded-lg leading-tight font-semibold py-2 ${margin} ${outline}`;

  return (
    <div className={`relative flex items-center ${props.className}`}>
      {props.icon && (
        <props.icon className="w-6 h-6 absolute ml-4 text-gray-700" />
      )}
      <input
        className={fieldClass}
        type={props.type || "text"}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
