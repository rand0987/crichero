const Commentry = ({ textRef }) => {
  return (
    <div className="flex justify-center mt-8">
      <textarea
        ref={textRef}
        placeholder="Type commentary..."
        className="h-[8rem] w-[30rem] rounded-2xl bg-gray-200 placeholder-gray-600 text-gray-800 p-4  focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
      />
    </div>
  );
};

export default Commentry;
