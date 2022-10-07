import React, { useState } from "react";
import menuLine from "images/icons/menu-line.png";
import "./NavBubble.scss";

export function NavBubble() {
  const [menuOpen, setMenuOpen] = useState("nav-bubble-closed");

  const handleMenuToggle = (e) => {
    if (menuOpen === "nav-bubble-closed"){
      setMenuOpen("nav-bubble-open");
    } else {
      setMenuOpen("nav-bubble-closed");
    }
  }

  return (
    <div className={`nav-bubble`}>
      <div className={`nav-bubble-icon ${menuOpen}-icon`} onClick={handleMenuToggle}>
        <img className="nav-bubble-icon-line" src={menuLine} alt="Menu line" />
        <img className="nav-bubble-icon-line" src={menuLine} alt="Menu line" />
        <img className="nav-bubble-icon-line" src={menuLine} alt="Menu line" />
      </div>
      <div className={`nav-bubble-menu-bg ${menuOpen}-menu-bg`} />
      <div className={`nav-bubble-menu-list ${menuOpen}-menu`}>
        <a className={`nav-bubble-menu-item ${menuOpen}-menu-item`} href="#">Home</a>
        <a className={`nav-bubble-menu-item ${menuOpen}-menu-item`} href="#">Posts</a>
        <a className={`nav-bubble-menu-item ${menuOpen}-menu-item`} href="#">About</a>
        <a className={`nav-bubble-menu-item ${menuOpen}-menu-item`} href="#">Credits/Attributions</a>
      </div>
    </div>
  )
}