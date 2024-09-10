import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar(){
    return(
        <nav className="navbar">
            <NavLink to="/">
                Home
            </NavLink>

            <NavLink to="/battlepage">
                BATTLE
            </NavLink>
            <NavLink to="/history">
                HISTORY 
            </NavLink>
        </nav>
    )
}

export default NavBar;