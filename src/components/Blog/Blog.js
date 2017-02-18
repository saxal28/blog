import React from "react";

const Blog = (props) => {
    return (
        <div className="blog">
            <h1 className="blog-title">{props.title}</h1>
            <h3 className="blog-subtitle">{props.subtitle}</h3>
            <hr />
            <p>{props.body}</p>
            <hr />
        </div>
    )
}

export default Blog;