// опишите компоненту которая   содержит компоненту которая содержит кнопку для показа диалога и хранит состояние диалога(закрит/открыт)
import React, { Component } from "react";

import Expand from "./Expand.jsx";

class App extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    <p>
      Hooks are a new addition in React 16.8. They let you use state and other
      React features without writing a class.
    </p>;
    return (
      <div className="app">
          <Expand title="Some title">{text}</Expand>
      </div>
    );
  }
}

export default App;