import React from "react";
class App extends React.Component{
constructor(){
  super();
  this.state = {
    count:0,
    
  }


}

increment = ()=>{
  this.setState({count:this.state.count+1})
}

  render(){
    return(
      <>
      <h1>Hello</h1>
      <h2>Count : {this.state.count}</h2>
      <button onClick={this.increment}>+</button>
      </>
    )
  }
}

export default App;