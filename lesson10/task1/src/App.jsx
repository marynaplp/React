// опишите компоненту которая принимает имя пользователя и загружет его данные. АРР должна отрисовать хедер с UserMenu, UserProfile 
import React, { Component} from "react";
import UserProfile from "./UserProfile.jsx";
import UserMenu from "./UserMenu.jsx";

class Page extends Component {
  state = {
    userData: null,
  };
  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUserData = (userId) => {
    const userUrl = `https://api.github.com/users/${userId}`;
    fetch(userUrl)
      .then((response) => response.json())
      .then((userData) =>
        this.setState({
          userData,
        })
      );
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.name.userData} />
        </header>
        <UserProfile userData={this.state.name.userData} />
      </div>
    );
  }
}
export default Page;