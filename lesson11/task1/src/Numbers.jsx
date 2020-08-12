//опишите компоненту которая принимает заголовок в свойстве title  число в свойстве number. Numbers отображает переданное число  и заголовок. Numbers должна перерисовываьться только при изменении свойства.


import React, {PureComponent} from "react";

class Numbers extends PureComponent {
//  shouldComponentUpdate(nextProps){
//    if (this.props.number === nextProps.number && this.props.title === nextProps.title){
//      return false;// если не поменялся title и и number то вернется false
//    }
//    return true
//  }
  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
    <span className="number__value">{this.props.number}</span>
      </div>

    )
  }
}


  
export default Numbers;

