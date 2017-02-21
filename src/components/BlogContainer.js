import React, { Component } from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";
import getAllBlogs from "../Util/util";
import BlogPreview from "./BlogPreview/BlogPreview"

class BlogContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { blogs: null }
  }
  componentWillMount() {
    getAllBlogs().then(res => {
      console.log(res.data.blogs);
      this.setState({blogs: res.data.blogs})
    })
  }
  render() {
    return (
      <div>
      {/*this just makes sure everything is loaded properly before rendering*/}
      {this.state.blogs ? 
        <div>
          <Header title="Header Title" subtitle="Header Subtitle" />
          {this.state.blogs.map((blog, index) => {
            return <BlogPreview 
              key={index}
              id={blog._id}
              title={blog.title} 
              style={{marginBottom:40}}
              subtitle={blog.subtitle} 
              body={blog.body} 
              date={blog.date} />

          })}
          <Footer />
        </div> : "....Fetching Blogs...."}

      </div>

    );
  }
}

export default BlogContainer;
