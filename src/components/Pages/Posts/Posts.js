import React, { useState, useEffect } from "react";
import { PostPreview } from "components";
// import { getAllPosts } from "hooks";
import data from "data/dummydata/posts.json";
import menuIcon from "images/icons/menu-60.png";
import "./Posts.scss";

export function Posts() {
    const [showing, setShowing] = useState({"num": 5, posts: []});
    const { posts } = data;

    useEffect(() => (setShowing({"num": 5, posts: posts.slice(0, 5)})), [posts]);

    const handleShowMore = () => {
        setShowing((current) => (
            {"num": current.num + 5, "posts": posts.slice(0, current.num + 5)}
            ));
    }

    const handleShowLess = () => {
        const newNum = showing.num - 5 < 5 ? 5 : showing.num - 5;
        setShowing(() => ({"num": newNum, "posts": posts.slice(0, newNum)}));
    }

    return (
        <div className="posts">
            <div className="posts-body">
                <div className={`posts-body-head`}>
                    <h2 className="posts-title">Posts</h2>
                    <div className="posts-menu"><img src={menuIcon} alt="Menu" /></div>
                </div>
                <div className="posts-list">
                    {showing.posts.map((post) => (
                        <PostPreview {...post} />
                    ))}
                    <div className="posts-list-show-btn-group">
                        {showing.num > 5 && (
                            <div className="posts-list-show-btn" onClick={handleShowLess}>
                                Show Less
                            </div>
                        )}
                        {posts.length > showing.num && (
                            <div className="posts-list-show-btn" onClick={handleShowMore}>
                                Show More
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="posts-index">
                <div className="posts-index-title">
                    All Posts
                </div>
                <div className="posts-index-list">
                    {posts.map((post) => (<a href="/posts">{post.title}</a>))}
                </div>
            </div>
        </div>
    );
}
