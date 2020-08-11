// опишите компоненту которая содержит поле ввода для текста и  кнопку поиска 
import React, { Component } from "react";
import ShoppingCard from "./ShoppingCard.jsx";
import UserMenu from "./UserMenu.jsx";

class App extends Component {
state = {
firstName : "Maryna",
lastName : "Pylypchenko",
  }
  handleChange = (event) =>{
    const { name, value} = event.target;
    this.setState ({
      ...this.state,
      [name]: value 
    })
    }
render(){
  return(
    <div class="page">
  <h1 class="title">{`Hello, ${firstName} ${lastName}`}</h1>
  <main class="content">
    <Shopping />
    <Profile />
  </main>
  </div>
  )

}
  }



export default App;