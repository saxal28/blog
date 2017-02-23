import React, { Component } from "react";

export default class Admin extends Component {
    render() {
        return (
            <div className="blog blog-container">
               <h1>Admin</h1>
               <div>
                    <h3>Admin</h3>
                    <input type="text" />
                    <h3>Password</h3>
                    <input type="password" />
                    <div style={{marginTop: 30}}>
                     <button 
                        className="blog-button" 
                        style={{width:"100%"}}
                        >Login
                    </button>
                    </div>
               </div>

               <div>
                    <h3>What do you want to do?</h3>
                    <div style={{marginTop: 30}}>
                     <button 
                        className="blog-button" 
                        style={{width:"100%"}}
                        >Add Blog
                    </button>
                    </div>
                    <div style={{marginTop: 30}}>
                     <button 
                        className="blog-button" 
                        style={{width:"100%"}}
                        >Update Blog
                    </button>
                    </div>
                    <div style={{marginTop: 30}}>
                     <button 
                        className="blog-button" 
                        style={{width:"100%"}}
                        >Delete Blog
                    </button>
                    </div>
               </div>
            </div>
        )
    }
}