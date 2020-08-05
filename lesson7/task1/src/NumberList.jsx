
import React from "react";

const NumberList = ({ numbers }) => {
    const numberElems = numbers.map((num) => <li>{num}</li>);
    const element = <ul>{numberElems}</ul>;
    
    return element

}

export default NumberList;