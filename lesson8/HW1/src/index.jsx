import React from "react";
import ReactDOM from "react-dom";
import User from "./ConnectionStatus";
import "./index.scss";

const rootElement = document.querySelector("#root");

ReactDOM.render(<User userId="facebook" /> , rootElement);