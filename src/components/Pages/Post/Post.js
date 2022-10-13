import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { useApi } from "hooks";
import { Tag } from "components";
import "./Post.scss";


// BIGGEST TODO!
export function Post({ title, body, tags=[] }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState(null)
    const { getPost } = useApi();

    const postId = searchParams.get("id");
    console.log({postId})

    useEffect(() => {
        async function getPostData(id) {
            const postData = await getPost(postId);
            setData(postData);
        }
    }, [getPost, postId])

    console.log({data});
    return (
        <div className="post">
            <h2 className="post-title">{ title }</h2>
            <div className="post-tags">{tags.map((name) => (<Tag name={name} />))}</div>
            <div className="post-body">{ body }</div>
        </div>
    );
}
