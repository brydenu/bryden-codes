import React from "react";
import { Post, Footer, Navbar } from "components";

export default function PostPage() {
    return(
    <>
        <Navbar />
        <header></header>
        <main>
            <Post />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    );
}
