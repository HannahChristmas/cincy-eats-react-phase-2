import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div>
           <li>
                <NavLink to ="/" exact>Home</NavLink>
            </li> 
            <li>
                <NavLink to ="/restaurants">Our Spots</NavLink>
            </li> 
            <li>
                <NavLink to ="/add">Add A Spot</NavLink>
            </li>
        </div>
    )
}

export default NavBar;