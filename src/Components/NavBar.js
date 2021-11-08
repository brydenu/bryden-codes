import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <div className="nav-link">Home</div>
            </Link>
            <Link to="/Posts">
                <div className="nav-link">Posts</div>
            </Link>
            <Link to="/About">
                <div className="nav-link">About</div>
            </Link>
        </div>
    );
};

export default NavBar;
