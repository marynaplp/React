import React, { Component } from "react";
import "./clock.scss";


const getTimewithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
                location: props.location,
                offset: getTimewithOffset(props.offset).toLocaleTimeString()

            }
        setInterval(() => {
            this.setState({
                offset: getTimewithOffset(props.offset).toLocaleTimeString()
            });
        }, 1000);
    }
    render() {
        return (
           <div className="clock">
            <div className="clock__location">{this.state.location}</div>
            <div className="clock__time">{this.state.offset}</div> 
            </div >
        );
    }
}
export default Clock;