import {Navbar,Subnavbar} from "./Components/Navbar.jsx"

function App(){

  const theme = "light"
  const src = "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=2210&quality=70"

  return (
  
    // react fragments
  <>   
  
   
  <Navbar theme3 ={theme} name={"Alex"} img={src}/>
  <Subnavbar/>
    
    <h1>hello students</h1>
    <p>Hello para</p>
     {/* <Navbar/> */}
  </>
  )
}

export default App;