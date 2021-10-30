import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/Home">Home</Link>
            <Link to="/Posts">Home</Link>
            <Link to="/About">Home</Link>
        </div>
    );
};

export default NavBar;
