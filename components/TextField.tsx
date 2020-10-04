const TextField = (props) => {
  const margin = props.icon ? "px-12" : "px-4";
  const outline = props.error ? "border-red-500" : "border-black";
  const fieldClass = `appearance-none block w-full bg-white text-black placeholder-gray-700 border-4 border-black rounded-lg leading-tight font-semibold py-2 ${margin} ${outline} ${props.className}`;

  return (
    <div className="relative flex items-center">
      {props.icon && <props.icon className="w-6 h-6 absolute ml-4" />}
      <input
        className={fieldClass}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default TextField;
