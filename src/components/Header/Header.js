import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
    return (
        <div className="header text-center">
            <div style={{margin:"0 auto", textAlign:"center"}} className="text-center">
                <h1 className="header-title">{props.title}</h1>
                <h3 className="header-subtitle">{props.subtitle}</h3>
            </div>
        </div>
    )
}

export default Header;