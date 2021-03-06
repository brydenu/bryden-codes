import React from "react";
import Canvas from "../Components/Canvas";
import Card from "../Components/Card";
import "../styles/PostsIndex.css";

export default function PostIndex() {
    const cardHeader = {
        title: "Posts",
        subtitle:
            "Check out my posts about my experiences learning and growing as a software developer.",
    };
    return (
        <Card cardClass="posts" header={cardHeader}>
            A message written in a card on the canvas.
        </Card>
    );
}
