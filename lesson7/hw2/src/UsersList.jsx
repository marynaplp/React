// describes component which accepts the list of the users in properties users and render panation and list of users
import React from "react";

const NumbersList = ({ numbers }) => {
return (
    <ul>
{numbers.map((num =>
 <li key={num}>{num}</li>
 
  ))}
    </ul>
)
};

    
export default NumbersList;