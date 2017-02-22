import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
              <Header title="Alan's Blog" subtitle="Check out my Posts!" />
          </div>
          <div className="col-md-6">{this.props.children}</div>
        </div>
        
      </div>
    );
  }
}

export default App;
