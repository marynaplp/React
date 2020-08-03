//describes component which describes cmponent Online if component isOnline -true and component if faulse
import React  from "react";
import Offline from "./Offline.jsx"
import Online from "./Online.jsx";

const Status = (props) => {
  if (props.isOnline === true) {
    return <Online />;
  }
  return <Offline />;
};


export default Status;

