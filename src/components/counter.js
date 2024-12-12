import React, { useEffect, useState } from "react";


export default function App() {
  const [count, setCount] = useState(0);

  let timer;
  

  const handleStart = () => {
    setCount(count + 1);
   
  };

  const handleStop = () => {
    clearTimeout(timer);
  };
  const handlereset = () => {
    setCount(0);
    clearTimeout(timer);
  };
  useEffect(() => {
    if (count) {
     timer= setTimeout(handleStart, 1500);
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Let's start the counter</h1>
      <h3>{count}</h3>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handlereset}>reset</button>
    </div>
  );
}
