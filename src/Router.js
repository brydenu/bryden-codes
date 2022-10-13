import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Blog, ContactMe, Credits, Home, Post, Projects } from "./layouts/index";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contact-me" element={<ContactMe />} />
            <Route exact path="/credits" element={<Credits />} />
            <Route exact path="/post" element={<Post />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/" element={<Home />} />
        </Routes>
    );
};

export default Router;
