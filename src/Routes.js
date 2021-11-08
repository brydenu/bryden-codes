import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Routes/Home.js";
import Post from "./Routes/Post.js";
import PostsIndex from "./Routes/PostsIndex.js";
import About from "./Routes/About.js";
import Canvas from "./Components/Canvas.js";

const Routes = () => {
    return (
        <Canvas>
            <Switch>
                <Route exact path="/post/:id">
                    <Post />
                </Route>
                <Route exact path="/posts">
                    <PostsIndex />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Canvas>
    );
};

export default Routes;
