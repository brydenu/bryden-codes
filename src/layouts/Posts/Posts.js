import React from "react";
import { Posts, Footer, Navbar } from "components";

export default function PostsPage() {
    return(
    <>
        <Navbar />
        <header></header>
        <main>
            <Posts />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    );
}