// опишите компонету котороя отображает компоненту Greeting and one of componets GuestGreeting/ UserGreeting depending on user status
import React, { Component } from "react";
import Greeting from "./Greeting"
import Login from "./Login"
import Logout from "./Logout"

 class Auth extends Component {
   constructor(props) {
     super(props);
     // state by default
     this.state = {
       isLoggedIn: false,
     };
   }

   handleLogIn = () => {
     this.setState({
       isLoggedIn: true,
     });
   };
   handleLogOut = () => {
     this.setState({
       isLoggedIn: false,
     });
   };
   render() {
     return (
       <div className="panel">
         <Greeting isLoggedIn={this.state.isLoggedIn} />
         <div>
           {this.state.isLoggedIn ? (
             <Logout onLogout={this.handleLogOut} />
           ) : (
             <Login onLogin={this.handleLogIn} />
           )}
         </div>
       </div>
     );
   }
 }
export default Auth