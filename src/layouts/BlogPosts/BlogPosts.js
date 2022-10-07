import React from "react";
import { Posts } from "components";
import Layout from "layouts/Layout";

export default function PostsPage() {

    const title = <h1>Blog Posts</h1>;
    const subtitle = "Read about what I've been up to lately.";
    const content = "From big successes to frustrating struggles, or valuable lessons to random interests, this is where I'll write when I think something is worth writing about.";

    const headerProps = { type: "posts", title, subtitle, content };

    return(
        <Layout headerProps={headerProps}>
            <Posts />
        </Layout>
    );
}