import React, { useState } from "react"

const useOfState = () => {
  
  const [laptop, setLaptop] = useState({
    brand: "Lenovo",
    model: "A3-P7a",
    year: 2024,
    color: "silver"
  });
  
  const changeColor = () => {
      setLaptop((prevData) => {
        return {...prevData, color: "ocean-blue", year: 2023}
      });
  }
  
  const [count, seCounter] = useState(0);
  
  return (
    <div>
    <h1>useState Hooke</h1>
    <h2>My {laptop.brand}</h2>
    <h3>It is {laptop.color}, model {laptop.model}, from {laptop.year}</h3>
    <button className="rounded bg-red-500 px-[5px]" onClick={changeColor}>Click Me</button>
    <div className="border-3 border-[gray]">
      <h3>Counter: {count}</h3>
    <button className="rounded bg-red-500 px-[5px]" onClick={()=>seCounter(count + 4)}>Click Me</button>
    </div>
    </div>
    )
}

export default useOfState;