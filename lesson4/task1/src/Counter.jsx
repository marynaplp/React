
import React, { Component } from "react";
import "./counter.scss";


let counter = 0;
class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter: props.start, 
        }
// Do not do this way
    setInterval(() => {
        this.setState({
            counter: this.state.counter + 1
        });
}, 1000); 
}

    render() {
        return (
        <div className="counter">{this.state.counter}</div>
        );
    }
}
export default Counter;