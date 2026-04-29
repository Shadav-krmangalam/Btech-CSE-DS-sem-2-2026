import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
function App(){
  return (
    <BrowserRouter>
   <Navbar/>

    <Routes>
      <Route path="/about/:username" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>


    </Routes>


    </BrowserRouter>
  )
}
export default App;