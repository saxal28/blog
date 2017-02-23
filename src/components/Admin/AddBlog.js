import React, {Component} from "react";
import { Router, hashHistory } from "react-router";
import axios from "axios";

export default class AddBlog extends Component {

    constructor(props) {
        super(props)
        this.state={data: null}
    }

    addBlog(data) {
        var url = "https://aqueous-shore-68659.herokuapp.com/blogs";
        axios.post(url, data).then(result => {
            console.log("success!", result);
            hashHistory.push('/');
        }).catch(e => console.log(e));
    }

    handleSubmit() {
        var inputs = document.querySelectorAll("input");
        var textarea = document.querySelector("textarea");
        inputs[2] = textarea;
        var labels = ["title","subtitle","body"];
        var dataObj = {};
        labels.forEach((label, index) => {
            dataObj[label] = inputs[index].value;
        })
        console.log(dataObj);
        this.addBlog(dataObj);
    }

    render() {
        return (
             <div className="blog blog-container text-left">
                <h1>Let's Add a Blog</h1>
                    <h2>Title</h2>
                    <input type="text" name="name"/>
                    <h2>Subtitle</h2>
                        <input type="text" name="subtitle" />
                    <h2>Body</h2>
                        <textarea></textarea>
                    <div style={{marginTop:30}}>
                        <button 
                        className="blog-button" 
                        style={{width:"100%"}}
                        onClick={this.handleSubmit.bind(this)}>Submit</button>
                    </div>
             </div>
        )
    }
}