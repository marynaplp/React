import React from "react";
import Greeting from "./Greeting";

const App = () => {
    return (
      <Greeting
        firstName="Maryna"
        lastName="Pylypchenko"
        birthDate={new Date("1989-08-15T11:11:11.819Z")}
      />
    );
}

export default App