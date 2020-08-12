// опишите компоненту которая   содержит компоненту которая содержит кнопку для показа диалога и хранит состояние диалога(закрит/открыт)
import React, { Component } from "react";
import Dialog from "./Dialog.jsx"



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
    const elem = <p>Some text</p>;
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>Show</button>
        <Dialog
         isOpen={this.state.isOpen} 
         title="some title" 
         onClose= {this.hideDialog} //  метод чтобы была возможность визвать 
         >
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}

export default App;