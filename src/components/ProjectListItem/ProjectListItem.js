import React, { useState } from "react";
import { Tag } from "components";
import "./ProjectListItem.scss";

export function ProjectListItem({ title, image, data }){
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMinimize = () => {
    setIsExpanded(false);
    console.log("reduced");
  }

  const handleMaximize = () => {
    setIsExpanded(true);
    console.log("expanded");
  }

  return(
    <div className="pli">
      <div className="pli-title">{title}</div>
      <div className="pli-tech">{data.tech.map((name) => (<Tag name={name} />))}</div>
      <div className={`pli-content pli-${isExpanded ? "expanded" : "reduced"}`}>
          <div className="pli-info">{isExpanded ? data.long : data.blurb}</div>
          <div className="pli-image"><img src={image.src} alt={image.altText} /></div>
      </div>
      <button type="button" onClick={isExpanded ? handleMinimize : handleMaximize}>{isExpanded ? "Show Less" : "Show More"}</button>
    </div>
  )
}