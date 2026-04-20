import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import style from 'styled-components'


const Button = style.button`
background-color:blue;
color:white;
padding:10px;
border-radius:10px;
`;

function App(){
  return (
    <>
    <h1 style={{backgroundColor:"magenta",color:"navy"}}>Hello Styling</h1>
    <Child1/>
    <Child2/>
    <Button>Click </Button>
    {/* <button>Click </button> */}
    </>
  )
}
export default App;