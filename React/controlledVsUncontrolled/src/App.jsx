import { useState } from "react";

function App(){
  const [input ,setInput] = useState("")
  const handleChange = (e)=>{
    console.log(e.target.value)
    setInput(e.target.value)

  }

  return (
    <>
    <form action="">
      <input type="text" value={input} onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
export default App;