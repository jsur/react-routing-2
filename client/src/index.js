// Readers: To prepare this project to build along in `./App.js`, complete
// steps 1 & 2 below
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import App from './components/App';

import "./styles/index.css";
import "./semantic-dist/semantic.css";
// import './index-complete';

// A common pattern for apps that use Router is 
// to wrap App component with Router
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
