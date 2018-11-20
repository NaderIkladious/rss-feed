import React, { Component } from "react";
import Feed from "./containers/feed";

import "./styles/index.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <h1 className="navbar-brand" href="#">
              RSS Feed
            </h1>
          </div>
        </nav>

        <div className="container">
          <Feed />
        </div>
      </div>
    );
  }
}

export default App;
