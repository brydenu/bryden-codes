import React from "react";
import { Switch, Route } from "react-router-dom";
import { About, ContactMe, Credits, Home, Post, Posts, Projects } from "./layouts/index";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/about">
                <About />
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
            <Route exact path="/posts">
                <Posts />
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
