import React, { Component } from "react";
import Header from "./Header/Header";
import Blog from "./Blog/Blog";
import axios from "axios";

export default class ViewBlogContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {blog : null}
    }

    componentWillMount() {
        var id = this.props.params.id;
        var url = `https://aqueous-shore-68659.herokuapp.com/blogs/${id}`;
        axios.get(url).then(post =>  {
            const { blog } = post.data;
            this.setState({blog})
        })
    }

    render() {
        return (
            <div>
                {this.state.blog ? 
                    <div className="blog-container">
                        <Blog
                            title={this.state.blog.title}
                            subtitle={this.state.blog.title}
                            body={this.state.blog.body}
                            date={this.state.blog.date}
                            commentsEnabled={true}
                        />
                     </div>
                    : "...getting blog..."}
            </div>
        )
    }
}

