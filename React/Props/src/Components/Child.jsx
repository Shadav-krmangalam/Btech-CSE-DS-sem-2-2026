import Component1 from "./Component1";

function Child({value,name}){
    return (
        <>
        <h1>Count : {value} </h1>
        <span>{name}</span>
        <Component1 count={value} name={name}/>
        
        </>
    )
}

export default Child;