import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Main from "./Components/Main";
import * as serviceWorker from "./serviceWorker";
import Content from "./Components/Content";
import Slide from "./Components/SlideShow";
import Section from "./Components/Section";
ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
