import React from "react";
import { Link } from "react-router";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <span className="pull-left">
                <Link to="/" className="blog-button">Home</Link>
                <Link to="/add" className="blog-button">Admin</Link>     
            </span>            
        </div>
    )
}

export default Navbar;