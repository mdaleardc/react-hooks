import React from 'react'
import UseStateHook from "./Hooks/UseStateHook"
import UseEffectHook from "./Hooks/UseEffectHook"


function App() {

  return (
    <div className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] grid grid-cols-1 gap-y-[2rem] w-full border-2 text-center">
    <UseStateHook />
    <UseEffectHook />
    </div>
  )
}

export default App
