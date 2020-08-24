import React, { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <button
        data-action="decrease"
        className="counter__button"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <span className="counter__value" onClick={() => setCounter(0)}>
        {counter}
      </span>
      <button
        className="counter__button"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
    </div>
  );
};

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };

//     this.decrement = this.decrement.bind(this);
//   }

//   decrement() {
//     this.setState({
//       counter: this.state.counter - 1,
//     });
//   }

//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   }

//   reset() {
//     this.setState({
//       counter: this.state.counter = 0,
//     });
//   }

//   render() {

//   }
// }

export default Counter;
