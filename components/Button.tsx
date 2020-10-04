type ButtonProps = {
  text: string;
  icon?: any;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  color?: string;
};
const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const text = props.text ?? "Text";
  const color = props.color ?? "bg-dark";

  return (
    <div className="relative flex items-center">
      <button
        className={`bg-dark text-white font-bold py-2 px-4 rounded-lg flex items-center ${props.className}`}
        onClick={props.onClick}
      >
        {props.icon && <props.icon className="mr-2 w-6 h-6" />}
        {text}
      </button>
    </div>
  );
};

const TagButton = (props) => {
  const text = props.text ?? "Text";
  const color = props.color ?? "bg-dark";

  return (
    <button
      className={`${color} text-white font-bold py-1 px-5 rounded-full text-sm ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      <div className="flex items-center">
        {props.icon && <props.icon className="mr-2 w-6 h-6" />}
        {text}
      </div>
    </button>
  );
};

export { Button, TagButton };
