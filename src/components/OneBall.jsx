import { useRef, useState } from 'react';
import Button from './Button';
import Commentry from './Commentry';

const OneBall = () => {
  const textRef = useRef();
  const [score, setScore] = useState("");
  const [balls, setBalls] = useState([]);

  const getBtn = (name) => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
      btn.classList.remove('bg-yellow-500');
    });
    return Array.from(btns).find(btn => btn.innerText === name);
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
      btn.classList.remove('bg-yellow-500');
      setBalls(prev => [...prev, { score, commentryText }]);
      textRef.current.value = "";
      setScore("");
    }
  };

  return (
    <>
      <div className="flex justify-around items-center rounded-sm mt-[5rem] px-[2rem] bg-gray-400 px-5 py-5 mx-[15rem]">
        <Button name="1" onk={scoreUpdate} />
        <Button name="2" onk={scoreUpdate} />
        <Button name="3" onk={scoreUpdate} />
        <Button name="4" onk={scoreUpdate} />
        <Button name="5" onk={scoreUpdate} />
        <Button name="6" onk={scoreUpdate} />
        <Button name="0" onk={scoreUpdate} />
        <Button name="WD" onk={scoreUpdate} />
        <Button name="NB" onk={scoreUpdate} />
      </div>

      <div>
        <Commentry textRef={textRef} />
        <div className="mx-[35rem] my-5">
          <Button name="Finish" onk={handleButtonClick} />
        </div>
      </div>

      <div>
        {balls.length !== 0 && [...balls].reverse().map((ball, index) => (
          <div key={index}>
            <h1 className='text-black'>Score: {ball.score}</h1>
            <p className='text-black'>Commentry: {ball.commentryText}</p>
          </div>
        ))}
        {((balls.length)%6===0 && balls.length!==0)?<hr />:null}
      </div>
    </>
  );
};

export default OneBall;
