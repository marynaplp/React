// опишите компонету котороя отображает компоненту Greeting and one of componets GuestGreeting/ UserGreeting depending on user status
import React, { Component } from "react";
import Logout from "./Logout";
import Login from "./Login";
import Spinner from "./Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isLoading: false,
    };
  }

  handleLogIn = () => {
    this.setState({
      isLoggedIn: true,
    });
    this.loadSpinner();
  };

  handleLogOut = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  loadSpinner = () => {
    this.setState({
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  };

  render() {
    const button = !this.state.isLoggedIn ? (
      <Login onLogin={this.handleLogIn} />
    ) : (
      <Logout onLogout={this.handleLogOut} />
    );

    return (
      <div className="main">
        {this.state.isLoading ? <Spinner size={50} /> : button}
      </div>
    );
  }
}
export default Auth;
