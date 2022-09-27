import React from "react";
import "./Header.scss";

export function Header({ type = "generic", title, subtitle, content }) {
  return (
      <header className={`header header-${type}`}>
        <div className={`header-title header-title-${type}`}>
          {title}
        </div>
        <div className={`header-subtitle header-subtitle-${type}`}>
          {subtitle}
        </div>
        <div className={`header-content header-content-${type}`}>
          {content}
        </div>
      </header>
  )
}