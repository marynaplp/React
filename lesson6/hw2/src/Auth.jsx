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
   onLogin = () => {
     this.setState({
       isLoading: true,
     });
     setTimeout(() => {
       this.setState({
         isLoading: false,
         inLoggedIn:true
       });
     }, 2000);
   };
   onLogout = () => {
     this.setState({
       isLoggedIn: false,
     });
   };
   render() {
     if (isLoading.this.stae){
       return <Spinner size={20} />
     }
     if(inLoggedIn.this.state){
     return <Logout onLogout={this.Logout} />
     }
     return <Login onLogin={this.Login} />
   } 
 }

//    handleLogIn = () => {
//      this.setState({
//        isLoggedIn: true,
//      });
//    };
//    handleLogOut = () => {
//      this.setState({
//        isLoggedIn: false,
//      });
//    };
//    render() {
//      return (
//        <div className="panel">
//          <Greeting isLoggedIn={this.state.isLoggedIn} />
//          <div>
//            {this.state.isLoggedIn ? (
//              <Logout onLogout={this.handleLogOut} />
//            ) : (
//              <Login onLogin={this.handleLogIn} />
//            )}
//          </div>
//        </div>
//      );
//    }
//  }
export default Auth