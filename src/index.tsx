import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./app.scss";

export * from "./manifest";

const el = document.getElementById("goodbyeWorld");

ReactDOM.render(<App />, el);