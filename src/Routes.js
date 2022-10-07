import React from "react";
import { Switch, Route } from "react-router-dom";
import { About, Blog, ContactMe, Credits, Home, Post, Projects } from "./layouts/index";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/blog">
                <Blog />
            </Route>
            <Route exact path="/contact-me">
                <ContactMe />
            </Route>
            <Route exact path="/credits">
                <Credits />
            </Route>
            <Route exact path="/post/:id">
                <Post />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;
