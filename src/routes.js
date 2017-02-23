import { Route, IndexRoute} from 'react-router';
import App from "./components/App";
import BlogContainer from "./components/BlogContainer";
import ViewBlogContainer from "./components/ViewBlogContainer";
import AddBlog from "./components/Admin/AddBlog";
import Admin from "./components/Admin/Admin";
import React from "react";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={BlogContainer} />
        <Route path="/admin" component={Admin} />
        <Route path="/admin/add" component={AddBlog} />
        <Route path="/:id" component={ViewBlogContainer} />
    </Route>
)