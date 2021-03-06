// опишите компоненту которая принимает имя пользователя и загружет его данные. АРР должна отрисовать хедер с UserMenu, UserProfile 
import React, { Component } from "react";
import UserProfile from "./UserProfile.jsx";
import UserMenu from "./UserMenu.jsx";

class Page extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUserData(this.props.userId); // 
  }

  fetchUserData = (userId) => {
    const userUrl = `https://api.github.com/users/${userId}`;
    fetch(userUrl)
      .then((response) => response.json())
      .then((userData) =>
        this.setState({ //визван  setStateи реакт занет что нужно  перерисовать картинку 
          userData,
        })
      );
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData}// userData попадает в UserProfile from this.state.userdata
         />
      </div>
    );
  }
}

export default Page;