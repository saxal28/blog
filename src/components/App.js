import React, { Component } from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";
import getAllBlogs from "../Util/util";

class App extends Component {
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
          <Header title="Header Title" />
          {this.state.blogs.map((blog, index) => {
            return <Blog title={blog.title} subtitle={blog.subtitle} body={blog.body} />

          })}
          <Footer />
        </div> : "..."}

      </div>

    );
  }
}

export default App;
