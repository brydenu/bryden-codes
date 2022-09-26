import React from "react";
import { Home, Footer, Navbar, Header } from "components";

export default function HomePage() {

    const title = (
        <h1>
            <div>Welcome to Bryden's</div>
            <div>(kind of)</div>
            <div>Portfolio Website</div>
        </h1>
    );

    const subtitle = (
        <>
            <div>
                Avid gamer, programmer, sports fan, and more!
            </div>
        </>
    );

    const content = (
        <>
            <div>
                This is a website I hope to be a central hub of any other
                side projects I make, as well as a blog for any tech-related
                things I would want to write about. I hope to add plenty of
                content here to make a complete feeling website!
            </div>
        </>
    )


    return (
    <>
        <Navbar />
        <Header type={"home"} title={title} subtitle={subtitle} content={content} />
        <Home />
        <Footer />
    </>
    );
}
