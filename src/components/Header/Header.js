import React from "react";
import "./Header.scss";

export function Header({ type = "generic", title, subtitle, content }) {
  return (
      <header className={`header header-${type}`}>
        <div className={`header-title header-title-${type}`}>
          {title}
        </div>
        {!!subtitle && 
          <div className={`header-subtitle header-subtitle-${type}`}>
            {subtitle}
          </div>
        }
        {!!content &&
          <div className={`header-content header-content-${type}`}>
            {content}
          </div>
        }
      </header>
  )
}