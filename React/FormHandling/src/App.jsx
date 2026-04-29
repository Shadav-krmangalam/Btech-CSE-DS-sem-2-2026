import { useState } from "react";

function App(){
  const [data,setData] = useState({
    email:"",
    password:""
  })


  const handleChangeEmail = (e)=>{
    setData((prev)=>({
      ...prev,
      email:e.target.value
    }))
  }

    const handleChangePassword = (e)=>{
      setData((prev)=>({
        ...prev,
        password:e.target.value

      }))
  }

  const handleSubmit =(e)=>{
    e.preventDefault()

    if(!data.email.includes('@krmu')){
      alert("Invalid Email")
      return;
    }
    if(data.password.length<8){
      alert("Password must be greater than or equal to 8 Digits")
      return;
    }
    console.log(data)
    setData({
    email:"",
    password:""
  })
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={data.email} onChange={handleChangeEmail}/>
      <input type="password" placeholder="password" value={data.password} onChange={handleChangePassword}/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
export default App;