import React from "react";
import  Text  from "react-format-text";
import { Link } from "react-router";

const Blog = (props) => {
    return (
        <div className="blog">
            <p className="pull-right blog-date">{props.date.substring(0,10)}</p>
            <h1 className="blog-title">{props.title}</h1>
            <h3 className="blog-subtitle">{props.subtitle}</h3>
            <hr />
            <span className="blog-body">
                <Text>{props.body}</Text>
            </span>
            <hr />
            <div className="text-center">
                <Link to={"/"}><button className="blog-button">Home</button></Link>
                {props.commentsEnabled ? <button className="blog-button inverted-button">View Comments</button> : ""}
            </div>
        </div>
    )
}

export default Blog;