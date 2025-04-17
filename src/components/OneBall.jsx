import { useRef, useState } from 'react';
import Button from './Button';
import Commentry from './Commentry';

const OneBall = () => {
    const textRef = useRef();
    const [score, setScore] = useState("");
  
    const scoreUpdate = (name) => {
      setScore(name);
    };
  
    const handleButtonClick = (name) => {
      const commentryText = textRef.current.value;
      console.log('Text in textarea:', commentryText);
      console.log('Button clicked:', score);
  
      if (name === "Finish") {
        textRef.current.value = "";
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
        </div>
        <div>
          <Commentry textRef={textRef} />
          <div className="mx-[40rem] my-5">
            <Button name="Finish" onk={handleButtonClick} />
          </div>
        </div>
      </>
    );
  };
  
export default OneBall