// function App(){
//   let flag = false;
//   if(flag===true){
//     return(
//       <>
//       <h1>Hello First</h1>
//       <ul>
//         <li>List 1</li>
//         <li>List 2</li>
//       </ul>
//       </>
//     )
//   }else{
//     return(
      
//       <>
//       <a href="#">Google</a>
//       <img src="#" alt="Dummy" />
      
//       </>
//     )
//   }
// }

// export default App;

function App(){
  let flag = true;
  return (
    <>
    {flag ? <><h1>Hello First</h1>
      <ul>
        <li>List 1</li>
        <li>List 2</li>
      </ul></>:
            <>
      <a href="#">Google</a>
      <img src="#" alt="Dummy" />
      
      </>}
    
    </>

  )
}

export default App;