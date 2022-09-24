import React from "react";
import { Home, Footer, Navbar, Header } from "components";

export default function HomePage() {

    const title = (
        <>
            <h1>Welcome to Bryden's (kind of) Portfolio Website!</h1>
        </>
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
        <header className="header-wrapper home-header-wrapper">
            <Header type={"home"} title={title} subtitle={subtitle} content={content} />
        </header>
        <main>
            <Home />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    );
}
