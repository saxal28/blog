import axios from "axios";
var url = "https://aqueous-shore-68659.herokuapp.com/blogs";

//get all blog posts

function getAllBlogs() {
    var blogs = axios.get(url);
    return blogs;
}

export default getAllBlogs;