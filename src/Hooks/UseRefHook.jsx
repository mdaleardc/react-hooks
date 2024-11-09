import React, { useRef, useState, useEffect } from "react"

const UseRefHook = () => {
  
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Initial Text");
  const inputRef = useRef();
  
  const btnClicked = () => {
      setText(inputRef.current.value);
      inputRef.current.style.background = "#457";
      
  }
  
  return (
    <>
    <h1>useRef Hook</h1>
    <button className="rounded" type="button" onClick={() => setCount(count + 1)}>+</button>
    <h3>Count: {count}</h3>
    <button className="rounded" type="button" onClick={() =>  { if(count >= 1) { setCount(count - 1) } }}>-</button>
    <input type="text" className="text-2xl w-[30%]" ref={inputRef}/> <button onClick={btnClicked}>Click</button>
    <h2>TextMessage: {text}</h2>
   </>
    )
  
}

export default UseRefHook;