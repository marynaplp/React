
import React, {useState, useEffect } from "react";
const Dimensions = () => {
  const[dimensions, setDimensions]= useState({ width: null,
    height: null,}); 

    useEffect(() => {
      const { innerHeight, innerWidth }= window;
      setDimensions({width: innerWidth, height: innerHeight});
      const handleResize= e => {
        const { innerWidth, innerHeight } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
      }
      window.addEventListener("resize", handleResize);
    },[])
    const {width, height } = dimensions;
    return (
      <div className="dimensions">{`${width}px - ${height}px`}</div>
    );

}

// class Dimensions extends Component {
//   state = {
    
//   };

//   componentDidMount() {
//     window.addEventListener("resize", this.onResize);

//     const { innerWidth, innerHeight } = window;
//     this.setDemensions(innerWidth, innerHeight);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.onResize);
//   }

//   onResize = (e) => {
//     const { innerWidth, innerHeight } = e.target;
//     this.setDemensions(innerWidth, innerHeight);
//   };

//   setDemensions = (width, height) => {
//     this.setState({
//       width,
//       height,
//     });
//     document.title = `${innerWidth} x ${innerHeight}`;
//   };

//   render() {
//   }
// }

export default Dimensions;