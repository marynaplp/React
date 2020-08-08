
import React, { Component } from "react";

class Connection extends Component {
  state = {
    status: 'online',
  }
changeStatus =(e) =>{
  this.setState({
    status: e.type,
  })
}


  componentDidMount() {
    window.addEventListener("online", this.status)
    window.addEventListener("offline", this.state);
  }
  componentWillUnmount(){
    window.removeEventListener("online", this.status);
    window.removeListener("offline", this.state);
  }
  changeClassStatus = (status) => `status ${status === "offline" ? "status_offline" : "" }`
   render() {

   return <div className={this.changeClassStatus(this.state.status)}>{this.state.status}</div>;
    }
}

export default ConnectionStatus;