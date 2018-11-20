import React, { Component } from "react";
import { Feed } from "./containers";

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
        <div className="bg-dark text-center">
          <p className="text-white mb-0 py-3">
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
            ️by{" "}
            <a
              className="text-danger"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/naderikladious/"
            >
              Nader Ikladious
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
