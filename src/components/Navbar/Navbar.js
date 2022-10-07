import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <div className="nav-link">Home</div>
            </Link>
            <Link to="/projects">
                <div className="nav-link">Projects</div>
            </Link>
            <Link to="/blog">
                <div className="nav-link">Blog</div>
            </Link>
            <Link to="/about">
                <div className="nav-link">About</div>
            </Link>
            <Link to="/contact-me">
                <div className="nav-link">Contact Me</div>
            </Link>
        </div>
    );
}
