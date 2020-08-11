// опишите компоненту которая содержит поле ввода для текста и  кнопку поиска 
import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart.jsx";
import Profile from "./Profile.jsx";

class App extends Component {
  state = {
    firstName: "Maryna",
    lastName: "Pylypchenko",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div className="page">
        <h1 className="title">{`Hello, ${firstName} ${lastName}`}</h1>
        <main className="content">
          <ShoppingCart userName={firstName} />
          <Profile userData={this.state} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default App;
