const Button = (props) => {
  const text = props.text ?? "Text";

  return (
    <div className="relative flex items-center">
      <button
        className={`bg-dark text-white font-bold py-2 px-4 rounded-lg ${props.className}`}
        type={props.type}
        onClick={props.onClick}
      >
        <div className="flex items-center">
          {props.icon && <props.icon className="mr-2 w-6 h-6" />}
          {text}
        </div>
      </button>
    </div>
  );
};

const TagButton = (props) => {
  const text = props.text ?? "Text";

  return (
    <div className="relative flex items-center">
      <button
        className={`bg-dark text-white font-bold py-1 px-5 rounded-full text-sm ${props.className}`}
        type={props.type}
        onClick={props.onClick}
      >
        <div className="flex items-center">
          {props.icon && <props.icon className="mr-2 w-6 h-6" />}
          {text}
        </div>
      </button>
    </div>
  );
};

export { Button, TagButton };
