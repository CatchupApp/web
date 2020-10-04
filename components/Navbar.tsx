const Navbar = (props) => {
  return (
    <div className="w-full h-14 bg-white flex items-center space-between p-3">
      <div className="h-8 w-8 bg-purple-theme rounded-lg" />
      <div className="text-black font-bold ml-3">
        {props.title ?? "My Classroom"}
      </div>
    </div>
  );
};

export default Navbar;
