import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersListß";
import "./index.scss";

const rootElement = document.querySelector("#root");


ReactDOM.render(<UsersList users={users} />, rootElement);;