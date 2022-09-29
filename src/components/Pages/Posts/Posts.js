import React, { useState } from "react";
import { PostPreview } from "components";
// import { getAllPosts } from "hooks";
import data from "data/dummydata/posts.json";
import "./Posts.scss";

export function Posts() {
    const [showing, setShowing] = useState(5);
    const { posts } = data;

    return (
        <div className="posts">
            <div className="posts-list">
                {posts.slice(0, showing).map((post) => (
                    <PostPreview {...post} />
                ))}
            </div>
            <div className="posts-index">
                <div className="posts-index-title">
                    All Posts
                </div>
                <div className="posts-index-list">
                    {posts.map((post) => (<a href="#">{post.title}</a>))}
                </div>
            </div>
        </div>
    );
}
