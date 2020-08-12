// опишите компоненту которая   содержит компоненту которая содержит кнопку для показа диалога и хранит состояние диалога(закрит/открыт)
import React, { Component } from "react";
import Dialog from "./Dialog.jsx"



class App extends Component {
  state = {
    number:0, 
  };
  componentDidMount() {
    this.intervalId = setInterval(() =>{
      this.setState({
        number: this.state.number + 1
      })
    }, 1000);
  }
  componentWillUnmount() {// очистка за собой когда компонеты уходят из строници
    clearInterval(this.intervalId);
  }
  render(){
    return (
      <div className="app">
        <EvenNumbers title="Even numbers" number={this.state.number} />
        <Numbers title="All numbers" number={10} />
        <OddNumbers title="Odd numbers" number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
      </div>
    );
  }
}

export default App;