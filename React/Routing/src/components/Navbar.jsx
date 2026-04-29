import {Link,NavLink} from "react-router-dom"
function Navbar(){
    return (
        <nav>
            <NavLink to="/about/Alex" style={({isActive})=>({color:isActive?"red":"blue"})}>About</NavLink>
            <NavLink to="/contact" style={({isActive})=>({color:isActive?"red":"blue"})}>Contact</NavLink>
        
        </nav>
    )

}
export default Navbar;