import React from "react";
import "./Tag.scss";

export function Tag({ name }) {

  const handleClick = (e) => {
    console.log("Clicked tag.")
    console.log("tag:", e.target);
    console.log("class?", e.target.classList)
  }

  return (<div className="tag" data-tag-name={name} onClick={handleClick}>{name}</div>)
}