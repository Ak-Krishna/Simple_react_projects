
// eslint-disable-next-line react/prop-types
const Button = ({color,setColor}) => {
  return (
    <button
      onClick={() => setColor(color)}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize"
      style={{ backgroundColor: color, color: "white" }}
    >
      {color}
    </button>
  );
};

export default Button;
