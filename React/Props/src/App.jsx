import { useState } from "react";
import Child from "./Components/Child";

function App(){

   //defining states
   const [count,setCount] = useState(0)
   const[name,setName] = useState("Alex")
   const increment = ()=>{
    setCount(count+1)
   }

  return (
    <>
    <Child value={count} name={name}/>
    <button onClick={increment}>+</button>

    </>
  )
}
export default App;