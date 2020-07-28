import "./styles.scss";
import "./search.scss";
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.querySelector('#root');
ReactDOM.render( <Search name="Tom" /> , rootElement)