import axios from "axios";
var url = "https://aqueous-shore-68659.herokuapp.com/blogs";

//get all blog posts

export default function getAllBlogs() {
    var blogs = axios.get(url);
    return blogs;
}

