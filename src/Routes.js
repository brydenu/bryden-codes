import React from "react";
import { Switch, Route } from "react-router-dom";
import { About, Home, Post, Posts } from "./Routes/index";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/post/:id">
                <Post />
            </Route>
            <Route exact path="/posts">
                <Posts />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;
