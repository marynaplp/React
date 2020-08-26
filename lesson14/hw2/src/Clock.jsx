import React, {useEffect, useState } from "react";
import "./index.scss";


const getTimewithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

const Clock = ({location, offset}) => {
    const [clock, setClock] = useState(getTimeWithOffset(offset).toLocaleTimeString());

useEffect(() => {
    const timeZone = setInterval(() => {
        setClock (getTimewithOffset(offset).toLocaleTimeString());
 }, 1000);  
return () => {
    clearInterval(timeZone)
};
}, []);

        return (
           <div className="clock">
            <div className="clock__location">{location}</div>
            <div className="clock__time">{clock}</div> 
            </div >
        );
}

export default Clock;