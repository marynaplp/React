import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersListß";
import "./index.scss";

const rootElement = document.querySelector("#root");
const users = [
  {
    name: "Tad",
    age: 18,
    id: "id-1",
  },
  {
    name: "Maria",
    age: 30,
    id: "id-2",
  },
  {
    name: "Anna",
    age: 23,
    id: "id-3",
  },
  {
    name: "Robert",
    age: 12,
    id: "id-4",
  },
  {
    name: "Barbara",
    age: 22,
    id: "id-5",
  },

];

ReactDOM.render(<UsersList users={users} />, rootElement);;