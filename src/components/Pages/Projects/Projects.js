import React from "react";
import { ProjectListItem } from "components";
import "./Projects.scss";
import brydencodes from "images/projectImages/brydencodes.png";

export function Projects() {
  const fakeProjects = [
    {
      "title": "brydencodes.com",
      "image": {
        "src": brydencodes,
        "altText": "Screenshot of brydencodes.com landing page.",
      },
      "data": {
        "long": "My portfolio site is this website and it is built entirely on JavaScript, with styling coming from Sass.\nThere are actually 2 other subdomains for brydencodes: an admin portal for me to update content without having to change a lot of code, and an api, that draws and stores information from/to a PostgreSQL database. The frontend site as you see it is built on React, while the API is built with NodeJs/express. All three URLs are hosted via Vercel, and the database is hosted with CockroachDB.",
        "blurb": "My portfolio site (This website you're on right now!).",
        "tech": ["JavaScript", "ReactJs", "NodeJs", "Vercel", "PostgreSQL", "CockroachDB"]
      }
    }
  ];
  return(
    <div className="projects">
      <div className="projects-head">
        <h2>All Projects</h2>
      </div>
      <div className="projects-list">
        {fakeProjects.map((project) => (<ProjectListItem {...project} />))}
      </div>
    </div>
  )
}