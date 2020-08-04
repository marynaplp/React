// опишите компонету котороя отображает компоненту Greeting and one of componets GuestGreeting/ UserGreeting depending on user status
import React, { Component } from "react";
import Spinner from "./Spinner.jsx"
import Login from "./Login"
import Logout from "./Logout"

 class Auth extends Component {
   constructor(props) {
     super(props);
     // state by default
     this.state = {
       isLoggedIn: false,
       isLoading: false,
     };
   }
   handleLogin = () => {
     this.setState({
       isLoggedIn: true,
     });
   };
   handleLogout = () => {
     this.setState({
       isLoggedIn: false,
     });
   };
   onLoading = () => {
     this.setState({
       isLoading: true,
     });
     setTimeout(() => {
       this.setState({
         isLoading: false,
         inLoggedIn: true,
       });
     }, 2000);
   };
   render() {
     const button = !this.state.isLoggedIn ? (
       <Login onLogin={this.handleLogin} />
     ) : (
       <Logout onLogout={this.handleLog} />
     );

     return (
       <div className="main">
         {this.state.isLoading ? <Spinner size={50} /> : button}
       </div>
     );
   }
 }
 export default Auth;
   
