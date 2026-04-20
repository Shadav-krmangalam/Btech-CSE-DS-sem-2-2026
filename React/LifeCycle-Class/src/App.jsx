import React from "react";

class App extends React.Component{

  constructor(){
    super()
    this.state={
      count:0
    }

  }

  increment=()=>{
    this.setState({count:this.state.count+1})
  }


   shouldComponentUpdate(nextProps,nextState){
    if(nextState.count>5){
      console.log("Render")
      return true
    }
    console.log("Not Render")
    return false;

   }

  componentDidMount(){
    console.log("Initially Component Mounted..")
  }

  componentDidUpdate(){
    console.log("Comp updation")
  }

  render(){
    return(
      <>
      <h1>Count : {this.state.count}</h1>
      <button onClick={this.increment}>Increment</button>
      </>
    )
  }

}

export default App;