import React from "react";

const getAge = (date) => parseInt((new Date().getTime() - new Date(date)) / (24 * 3600 * 365 * 1000))

function Greeting(props) {
    console.log(props)
    return <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${getAge(props.birthDate)} years old`}
    </div>
    
};


export default Greeting