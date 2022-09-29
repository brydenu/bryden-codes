import React from "react";
import { cutoffText } from "utils";
import "./PostPreview.scss";

export function PostPreview({ title, body, tags, datePosted }) {

  const bodyPreview = cutoffText(body, 150);

  return (
    <div className="post-preview">
      <div className="post-preview-title">{title}</div>
      <div className="post-preview-body">{bodyPreview}</div>
      <div className="post-preview-timestamp">{datePosted}</div>
      <div className="post-preview-tags">
        {tags.map((tag) => (<div className="post-preview-tag">{tag}</div>))}
      </div>
    </div>
  )
}