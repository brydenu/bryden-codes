import React from "react";
import { About } from "components";
import Layout from "layouts/Layout";

export default function AboutPage() {
    const title = <h1>About Me</h1>
    const subtitle = "It's nice to meet you.";

    const headerProps = { type: "about", title, subtitle };

    return (
        <Layout headerProps={headerProps}>
            <About />
        </Layout>
    );
}
