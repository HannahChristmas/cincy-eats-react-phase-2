import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <Link to ="/">Home</Link>
            <Link to ="/restaurants">Our Spots</Link>
            <Link to ="/add">Add A Spot</Link>
        </nav>
    )
}

export default NavBar;