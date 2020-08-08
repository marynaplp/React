
import React, { Component } from "react";

class Search extends Component {
  state = { value: '' }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({value: event.target.value})
  }
  search = event => {
    event.preventDefault();
    console.log(this.state.value);
  }
  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input type="text" 
        onChange={this.handleChange}
        value ={this.state.value} 
        className="search__input" />
        <button className="search__button">Search</button>
      </form>
    );
  }
}
  
  

  

  

export default ConnectionStatus;