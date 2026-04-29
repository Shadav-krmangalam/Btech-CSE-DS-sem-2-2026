// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import axios from "axios"

// function App(){
//   const [query,setQuery] = useState("")
//   const [result,setResult] = useState("")

//   useEffect(()=>{
//     const debouncing = setTimeout(()=>{
//       // fetch()
//       setResult(query)
//     },3000)

//     return ()=>{
//       clearTimeout(debouncing);
//     }

//   },[query])
//   return (
//     <>
//     <input type="text" onChange={(e)=>setQuery(e.target.value)}/>
//     <div>Result : {result}</div>
//     </>
//   )
// }

// export default App;


// function App(){
//    const API = "https://api.themoviedb.org/3/discover/movie?api_key=857696c41ec9ba15dd7185a7b50478e0"

//   //  &page=1
//    const [page,setPage] = useState(1)
//    const handlePrev = ()=>{
//     if(page>1){
//       setPage(page-1)
//     }
  
//    }
//    const handleNext = ()=>{
//     setPage(page+1)

//    }

//    useEffect(()=>{
//     async function fetchingAPI(){
//       let response = await axios.get(`${API}&page=${page}`)

//       console.log(response.data.results)

//     }
//     fetchingAPI()

//    },[page])

//   return (
//     <>
//     <button onClick={handlePrev}>Prev</button>
//     <span>{page}</span>
//     <button onClick={handleNext}>Next</button>
//     </>
//   )
// }

// export default App;


// var a = 15;
// function addition(num){
//   let res = num+num;
//   return res;
// }

// let ans = addition(a);
// let ans2 = addition(20)


// console.log(b)



// var b = 20

// console.log("hello")

// setTimeout(()=>{

// },5000)

// console.log("world")



function App(){
const API = "https://api.themoviedb.org/3/discover/movie?api_key=857696c41ec9ba15dd7185a7b50478e0&page=1"

  const [loading,setLoading] = useState(false)


  async function fetchApi(){
    setLoading(true)
    let res = await fetch(API)
    let data = await res.json();
    console.log(data)
    setLoading(false)
  }

  return (
    <>
    <button onClick={fetchApi}>Send Request</button>
   {loading ===true && <h1>Loading....</h1>}
    </>
  )
}

export default App