//describes component which input the list of the users 
import React, { Component } from "react";
import User from "./User";
import Filter from "./Filter.jsx";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ value: event.target.value }); // колбек который передает изменения из инпута в компонету UsersList
  };
  render() {
    const usersList = this.props.users
      .filter((user) =>
        user.name.toLowerCase().includes(this.props.users.toLowerCase())
      )
      .map((user) => <User {...user} key={user.id} />);

    return (
      <div>
        <Filter
          onChange={this.onChange}
          filterText={this.state.name}
          count={usersList}
        />
        <ul className="users">{usersList}</ul>
      </div>
    );
  }
}

export default UsersList;

