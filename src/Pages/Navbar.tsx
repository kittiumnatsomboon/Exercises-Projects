import { Link,Outlet } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
        Nav
        <Link to="/About">about</Link>
        <Outlet/>
        </>
    )
}
export default Navbar;