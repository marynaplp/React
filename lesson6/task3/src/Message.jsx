// describes component which shows message received in property text in element .message / If in property empty, do not show nothing 
import React from "react";

const Message = ({ text }) =>{
  if (!text){
    return null;
  }
  return(
    <div className="message">
          {text}
    </div>
  )
}

export default Message;