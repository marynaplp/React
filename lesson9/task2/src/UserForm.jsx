
import React, { Component } from "react";

class UserForm extends Component {
  state={
    name: "",
    student: "",
    occupation: "",
    about: ""
  }
handleChange = event => {
  const { name, value, checked} = event.target
  const val =  type ==="checkbox" ? checked :value
  this.setState({
    [name]: val
  })
}

handleSubmit = event => {
  event.preventDefault
 ();
console.log(this.state)}
  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" for="name">
            Name
          </label>
          <input
            className="form-input"
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            id="name"
            name="name"
            value=""
          />
        </div>
        <div className="form-control">
          <label className="form-label" for="student">
            Student
          </label>
          <input
            className="form-input"
            value={this.state.student}
            onChange={this.handleChange}
            type="checkbox"
            id="student"
            name="student"
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" for="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            value={this.state.occupation}
            className="form-input"
            onChange={this.handleChange}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="coconut">Sidney</option>
            <option value="mango">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" for="about">
            About
          </label>
          <textarea
            name="about"
            value={this.state.about}
            className="form-input"
            onChange={this.handleChange}
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
  
  export default UserForm 