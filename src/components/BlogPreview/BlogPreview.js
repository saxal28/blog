import React from "react";
import {Link} from "react-router";

const BlogPreview  = (props) => {
    return (
        <div className="blog blog-preview text-center">
            <small><p className="pull-right">{props.date.substring(0,10)}</p></small>
            <h1 className="blog-title">{props.title}</h1>
            <h3 className="blog-subtitle">{props.subtitle}</h3>
            <Link to={`${props.id}`}><button className="blog-button">View Blog</button></Link>
        </div>
    )
}

export default BlogPreview;