import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <div className="nav-link">Home</div>
            </Link>
            <Link to="/posts">
                <div className="nav-link">Posts</div>
            </Link>
            <Link to="/about">
                <div className="nav-link">About</div>
            </Link>
        </div>
    );
}
