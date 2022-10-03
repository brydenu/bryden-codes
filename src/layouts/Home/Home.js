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

    const subtitle = "I am a programmer, gamer, and sports fan.";
    const content = "This website will be a central hub of all other side projects I make, as well as a blog for any tech-related things I would want to write about. Be sure to check back often to keep up with my career as a developer!";

    const headerProps = { type: "home", title, subtitle, content };

    return (
        <Layout headerProps={headerProps}>
            <Home />
        </Layout>
    );
}
