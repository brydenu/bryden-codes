import React from "react";

export function Personal({ code, title, subtitle, description, extraContent=[] }) {
  return (
    <div className="personal">
      <div className="personal-header">
        <div className="personal-title">{title}</div>
        <div className="personal-subtitle">{subtitle}</div>
      </div>
      <div className="personal-body">
        <div className="personal-description">{description}</div>
        {extraContent.map(({ type, content }, idx) => (<div key={`${code}-${idx}`} className="personal-extra">{content}</div>))}
      </div>
    </div>
  )
}