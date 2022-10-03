import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
                <NavLink to ="/" exact>Home</NavLink>
                <NavLink to ="/restaurants">Our Spots</NavLink>
                <NavLink to ="/add">Add A Spot</NavLink>
        </nav>
    )
}

export default NavBar;