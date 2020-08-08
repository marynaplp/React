
import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };
  changeStatus = (e) => {
    this.setState({
      status: e.type,
    });
  };

  componentDidMount() {
    window.addEventListener("online", this.changeStatus);
    window.addEventListener("offline", this.changeStatus);
  }
  componentWillUnmount() {
    window.removeEventListener("online", this.changeStatus);
    window.removeEventListener("offline", this.changeStatus);
  }
  changeClassName = (status) =>
    `status ${status === "offline" ? "status_offline" : ""}`;

  render() {
    return (
      <div className={this.changeClassName(this.state.status)}>
        {this.state.status}
      </div>
    );
  }
}

export default ConnectionStatus;