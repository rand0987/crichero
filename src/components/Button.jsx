const Button = ({ name, onk }) => {
  return (
    <button
      onClick={() => onk(name)}
      className="bg-blue-700 btn cursor-pointer rounded-full text-white px-4 py-5 w-[4rem] h-[2rem] flex justify-center items-center"
    >
      {name}
    </button>
  );
};

export default Button;
