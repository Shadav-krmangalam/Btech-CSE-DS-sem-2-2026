import { useEffect, useState } from "react";

function App(){

  // const [name,setName] = useState("Joy")

  //  const changeFunction = ()=>{
  //   setName("Alex")
  //  }

  const [count,setCount] = useState(0)
  const [name,setName] = useState("Alex")
  const [task,setTask] = useState("Done")
  const increment = ()=>{
    setCount(count+1);
  }
  const nameChange = ()=>{
    setName("Joy")
  }

  const taskChange = ()=>{
    setTask("Pending")
  }

  useEffect(()=>{
    console.log("Hello Mounting...")
  },[name,task]) 

  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={increment}>+</button>

    <h1>Name : {name}</h1>
    <button onClick={nameChange}>Name Change</button>

    <h1>Task {task}</h1>
    <button onClick={taskChange}>Task Change</button>
    </>
  )
}
export default App;