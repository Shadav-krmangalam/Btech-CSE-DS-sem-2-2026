import { useState } from "react";

function App(){

  const [count,setCount] = useState(0)
  const increment = ()=>{
    setCount(count+1)
  }
   const decrement = ()=>{
    setCount(count-1)
  }

  return (
    <>
    <h1>Hello</h1>
    <h2>Count : {count}</h2>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    
    </>
  )
}
export default App;