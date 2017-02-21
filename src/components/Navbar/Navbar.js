import React from "react";
import { Link } from "react-router";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <span className="pull-left">
                <Link to="/" className="navbar-link">Home</Link>   
            </span>            
        </div>
    )
}

export default Navbar;