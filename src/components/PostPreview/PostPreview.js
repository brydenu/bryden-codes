import React from "react";
import { Tag } from "components";
import { cutoffText } from "utils";
import "./PostPreview.scss";

export function PostPreview({ title, body, tags, datePosted, id }) {

  const bodyPreview = cutoffText(body, 150);

  const handleClick = (e) => {
    window.location.href = `/post/${id}`;
  }

  return (
    <div className="post-preview" onClick={handleClick} data-post-id={id}>
      <div className="post-preview-title">{title}</div>
      <div className="post-preview-body">{bodyPreview}</div>
      <div className="post-preview-timestamp">{datePosted}</div>
      <div className="post-preview-tags">
        {tags.map((tag) => (<Tag name={tag} />))}
      </div>
    </div>
  )
}