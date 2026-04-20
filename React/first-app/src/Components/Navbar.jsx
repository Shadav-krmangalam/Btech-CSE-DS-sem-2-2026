export function Navbar(props){
    return (
        <>
            <h1>Hello navbar</h1>
            <p>Hello navbar para</p>
            <span>{props.theme3}</span>
            <span>{props.name}</span>
            <img src={props.img} alt="" />
        </>
    )
}

export function Subnavbar(){
    return (
        <h1>Sub Navbar</h1>
    )
}
// export default Navbar;