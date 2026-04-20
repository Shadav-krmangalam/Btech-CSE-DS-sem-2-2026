import { useEffect } from "react";
import { useRef } from "react";

function App(){
  const myRef = useRef(null)

  useEffect(()=>{
    // myRef.current.focus()
    myRef.current.value = "predefine value"

  },[])
  return (
    <>
    <input type="text"  ref={myRef}/>
    </>
  )
}
export default App;
