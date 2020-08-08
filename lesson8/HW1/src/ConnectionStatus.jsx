
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
    window.addEventListener("online", this.status);
    window.addEventListener("offline", this.state);
  }
  componentWillUnmount() {
    window.removeEventListener("online", this.status);
    window.removeListener("offline", this.state);
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