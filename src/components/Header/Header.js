import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
    return (
        <div className="header">
            <Navbar />
            <h1 className="header-title">{props.title}</h1>
        </div>
    )
}

export default Header;