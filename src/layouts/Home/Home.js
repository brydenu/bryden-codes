import React from "react";
import { Home, Footer, Navbar } from "components";

export default function HomePage() {
    return (
    <>
        <Navbar />
        <header></header>
        <main>
            <Home />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    );
}
