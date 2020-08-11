// опишите компоненту которая содержит поле ввода для текста и  кнопку поиска 
import React, { Component } from "react";
import Profile from "./Profile.jsx";
import ShoppingCard from "./ShoppingCard.jsx";


class Page extends Component {
state = {
  userName:{
firstName : "Maryna",
lastName : "Pylypchenko",
  }
  }
  handleChange = (event) =>{
    const { name, value} = event.target;
    this.setState ({
      userdata:{
      ...this.state.userData,
      [name]: value 
      }
    })
    }
render(){
 const { userData } = this.state;

  return (
    <div class="page">
      <h1 class="title">{`Hello, ${firstName} ${lastName}`}</h1>
      <main class="content">
        <ShoppingCart userData={userData} />
        <Profile userData={userData} handleChange={this.handleChange} />
      </main>
    </div>
  );

}
  }



export default Page;