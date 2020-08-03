// опишите компонету котороя отображает компоненту Greeting and one of componets GuestGreeting/ UserGreeting depending on user status
import React, { Component } from "react";
import Greeting from "./Greeting"

 class Auth extends Component {
     constructor(props){
         super(props);
         // state by default
         this.state = {
             isLoggedIn: false
         }
     }


     handleLogin = () => {
         this.setState({
             isLoggedIn: true,
         })
     }
     handleLogOut = () => {
         this.setState({
             isLoggedIn: false,
         })
     }
    render(){

        const button = this.state.isLoggedIn
        ? <button onClick={this.handleLogOut}>Logout</button>
        : <button onClick={this.handleLogin}>Login</button>
        
        // if(this.state.isLoggedIn){
        //     button = <button onClick={this.handleLogOut}>Logout</button>;
        // } else {
        //     button =<button onClick={this.handleLogin}>Login</button>;}

        return (
<div className="panel">
    <Greeting isLoggedIn = {this.state.isLoggedIn}/>
    <div>
       {button}
    </div>
</div>
        )
    }
}
export default Auth