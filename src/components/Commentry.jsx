const Commentry = ({ textRef }) => {
    return (
      <textarea
        ref={textRef}
        placeholder="type commentary"
        className="h-[7rem] w-[30rem] rounded-lg mx-[23rem] mt-5 placeholder-black bg-gray-400 text-white p-2 resize-none"
      />
    );
  };
  
  export default Commentry;
  