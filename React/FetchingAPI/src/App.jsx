import { useEffect } from "react"
import axios from "axios"

function App() {
  const API = "https://api.themoviedb.org/3/discover/movie?api_key=857696c41ec9ba15dd7185a7b50478e0&page=1"


  useEffect(()=>{
    try{
      console.log("Hello Api Fetching....")

      async function fetchAPI(){
        // let response = await fetch(API)
        // let data = await response.json()
        // console.log(data)
        let response = await axios.get(API)
        console.log(response)
        
      }
      fetchAPI()

    }catch(err){
      console.log(err)
    }

  },[])

  return (
    <div>App</div>
  )
}

export default App