//describes component which describes cmponent Online if component isOnline -true and component if faulse
import React, { useState, useEffect } from "react";

const ConnectionStatus= () => {
  const [status, setStatus] = useState(
    "online"
  );
  useEffect(() => {
    const Online = (e) =>{
setStatus(e.target);
    };
window.addEventListener("online", Online);
  
    const Offline = (e) => {
      setStatus(e.target)
    }
    window.addEventListener("offline", Offline);
    return () => {
      window.removeEventListener("online", Online);
      window.removeEventListener("offline", Offline);
    };
  }, []);
  const isOffline = status === "offline" && "status_offline"
  return <div className={`status ${isOffline}`}>{status}</div>;
  }

export default ConnectionStatus;

