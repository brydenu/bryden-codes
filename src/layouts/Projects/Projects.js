import React from "react";
import Layout from "layouts/Layout";
import { Projects } from "components";

export default function ProjectsPage() {
  const title = <h1>Projects</h1>
  const subtitle = <div>Check out my work and see what I've been up to lately.</div>
  const content = <div>Wondering what kind of programs and applications I like to develop? You came to the right page! Below is a detailed list of some personal projects that I put some decent time into, as well as some of my latest (public) git pushes.</div>

  const headerProps = { type: "projects", title, subtitle, content };

  return (
    <Layout headerProps={headerProps}>
      <Projects />
    </Layout>
  )
}