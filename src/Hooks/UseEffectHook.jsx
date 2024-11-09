import { useState, useEffect } from "react"

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      setCount(() => count + 1);
    }, 1000)
  }, [value]);
  
  const handleClick = () => {
    setValue(value + 1);
  }
  
  return (
    <div>
    <h1>useEffect Hook</h1>
    
    <h3>I've rendered {value} times!</h3>
    
    <h3>Counter: {count} </h3>
    
    <button type="button" onClick={handleClick}>Click Me</button>
    </div>
    )
}

export default UseEffectHook