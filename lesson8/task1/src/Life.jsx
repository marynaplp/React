import React, { Component } from "react";


class Life extends Component {
    constructor(props){
        super (props);
        console.log('constructor: good place to create state');
    }
    componentDidMount() {
        console.log("componentDidMount: API calls, subscriptions");
    }
    shouldComponentUpdate(nextProps, nextState) { /// for optimization 
        console.log(nextProps, nextState);
        console.log("shouldComponentUpdate(nextProps, nextState): decide to render or not to render") 
        return this.props !== nextProps;
    //console.log('=> shouldComponentUpdat')
}
    componentWillUnmount (){
        console.log("componentWillUnmount(): cleanup before DOM");
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState)
        console.log("componentDidUpdate(prevProps, prevState): some updates based on new props");
    }
    render (){
        console.log("return React element to build DOM");

    }
}

export default Life