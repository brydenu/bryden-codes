import React from "react";
import { Tag } from "components";
import { cutoffText } from "utils";
import "./PostPreview.scss";

export function PostPreview({ title, body, tags, datePosted }) {

  const bodyPreview = cutoffText(body, 150);

  const handleClick = (e) => {
    console.log("Clicked PostPreview");
    console.log("postpreview", e.target);
    // window.location.href = "/projects";
  }

  return (
    <div className="post-preview" onClick={handleClick}>
      <div className="post-preview-title">{title}</div>
      <div className="post-preview-body">{bodyPreview}</div>
      <div className="post-preview-timestamp">{datePosted}</div>
      <div className="post-preview-tags">
        {tags.map((tag) => (<Tag name={tag} />))}
      </div>
    </div>
  )
}