import React from "react";
import "./Header.scss";

export function Header({ type = "generic", title, subtitle, content }) {
  return (
      <header className={`header header-${type}`}>
        <div className="notepad">
          <div className={`header-title ${type}-title`}>
            {title}
          </div>
          <div className={`header-subtitle subtitle-${type}`}>
            {subtitle}
          </div>
          <div className={`header-content content-${type}`}>
            {content}
          </div>
        </div>
      </header>
  )
}