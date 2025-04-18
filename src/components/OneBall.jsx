import { useRef, useState } from 'react';
import Button from './Button';
import Commentry from './Commentry';


const OneBall = () => {
  const textRef = useRef();
  const [score, setScore] = useState("");
  const [balls, setBalls] = useState([]);
  const [s, setS] = useState("");
  

  const getBtn = (name) => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
      btn.classList.remove('bg-yellow-500');
    });
    return Array.from(btns).find(btn => btn.innerText === name);
  };

  const deletePrev = () => {
    setS(prev => prev.slice(0, prev.length - 2));
    setBalls(prev => {
      const removed = [...prev];
      removed.pop();
      return removed;
    });
  };
  
  const scoreUpdate = (name) => {
    setScore(name);
    const btn = getBtn(name);
    btn.classList.add('bg-yellow-500');
  };

  const handleButtonClick = (name) => {
    const commentryText = textRef.current.value;
    if (score === "") {
      alert("enter score");
      return;
    }
    if (commentryText.trim() === "") {
      alert("enter commentry");
      return;
    }
    if (name === "Finish") {
      const btn = getBtn(score);
      setS(prev => prev + " " + score);
      btn.classList.remove('bg-yellow-500');
      setBalls(prev => [...prev, { score, commentryText }]);
      textRef.current.value = "";
      setScore("");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 h-cover pt-[5rem] pb-6">
      <div className="flex justify-around items-center rounded-sm  px-[2rem] bg-gray-400  py-5 mx-[15rem]">
        <Button name="1" onk={scoreUpdate} />
        <Button name="2" onk={scoreUpdate} />
        <Button name="3" onk={scoreUpdate} />
        <Button name="4" onk={scoreUpdate} />
        <Button name="5" onk={scoreUpdate} />
        <Button name="6" onk={scoreUpdate} />
        <Button name="0" onk={scoreUpdate} />
        <Button name="WD" onk={scoreUpdate} />
        <Button name="NB" onk={scoreUpdate} />
        <Button name="W" onk={scoreUpdate} />
      </div>

      <div>
        <Commentry textRef={textRef} />
        <div className="mx-[35rem] my-5 flex gap-5 ">
          <Button name="Finish" onk={handleButtonClick} />
          <button className='bg-blue-700 btn cursor-pointer rounded-full text-white p-5 w-[4rem] h-[2rem] flex justify-center items-center' onClick={deletePrev}>Delete</button>
        </div>
      </div>

      <div className="flex justify-center mt-8\5">
        {s !== "" && (
          <p className="text-gray-700 bg-white px-4 py-1 mb-5 rounded-full shadow-md text-center text-lg max-w-xs overflow-x-auto whitespace-nowrap">{s}</p>
        )}
      </div>
      { balls.length===0?null:
      <div className='flex flex-col justify-center items-start gap-5 mx-[20rem] bg-white p-5 rounded-xl'>
        {balls.length !== 0 && [...balls].reverse().map((ball, index) => (
          <div className="border-b  pb-4 w-full" key={index}>
            <h1 className='text-black'><span className='font-bold'>Ball:</span> {ball.score}</h1>
            <p className='text-black'><span className='font-bold'>Commentry:</span> {ball.commentryText}</p>
        </div>
        ))}
      </div>}
    </div>
  );
};

export default OneBall;