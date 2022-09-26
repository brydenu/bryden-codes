import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="signature">Developed by Bryden Uyehara</div>
                <div className="to-credits"><Link to="/credits">Credits/Attributions</Link></div>
            </div>
        </footer>
    );
}
