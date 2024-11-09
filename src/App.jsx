import React from 'react'
import UseStateHook from "./Hooks/UseStateHook"
import UseEffectHook from "./Hooks/UseEffectHook"
import UseRefHook from "./Hooks/UseRefHook"


function App() {

  return (
    <div className="grid grid-cols-1 gap-y-[2rem] w-full border-2 text-center">
    <UseStateHook />
    <UseEffectHook />
    <UseRefHook />
    </div>
  )
}

export default App
