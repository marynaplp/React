//describe a component which describe UserGreeting or GuestGreeting depending on  property isLoggedIn
import React from "react";

const Spinner = ({ size }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return <span className="spinner" style={style}></span>;
};

export default Spinner;
