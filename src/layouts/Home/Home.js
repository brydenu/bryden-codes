import React from "react";
import { Home } from "components";
import Layout from "../Layout";
import "./Home.scss";

export default function HomePage() {

    const title = (
        <h1>
            <div>Welcome to Bryden's</div>
            <div>(kind of)</div>
            <div>Portfolio Website</div>
        </h1>
    );

    const subtitle = "Programmer, gamer, sports fan.";
    const content = "This is a website I hope to be a central hub of any other side projects I make, as well as a blog for any tech-related things I would want to write about. I hope to add plenty of content here to make a complete feeling website!";

    const headerProps = { type: "home", title, subtitle, content };

    return (
        <Layout headerProps={headerProps}>
            <Home />
        </Layout>
    );
}
