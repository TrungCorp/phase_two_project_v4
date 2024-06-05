import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar(){
    return(
        <nav className="navbar">
            <NavLink to="/">
                Home
            </NavLink>

            <NavLink to="/techniques">
                Techniques
            </NavLink>
        </nav>
    )
}

export default NavBar;