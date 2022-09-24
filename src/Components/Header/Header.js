import React from "react";

export function Header({ type = "generic", title, subtitle, content }) {
  return (
      <div className={`header ${type}-header`}>
        <div className={`header-title ${type}-title`}>
          {title}
        </div>
        <div className={`header-subtitle ${type}-subtitle`}>
          {subtitle}
        </div>
        <div className={`header-content ${type}-content`}>
          {content}
        </div>
      </div>
  )
}