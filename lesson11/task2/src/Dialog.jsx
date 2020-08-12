// опишите компоненту которая принимает заголовок в свойстве title и отображает дочерные элементы по центру экрана
import React from "react";
import PropTypes from "prop-types";

const Dialog = ({ isOpen, children, title}, onClose) => {
    if(isOpen){ return null } //передача content
    return (
      <div className="dialog">
        <div className="dialog__heading">
          <div className="dialog__title">{title}</div>
          <button className="dialog__close-btn" onClick={onClose}>+</button>
        </div>
        <div className="dialog__content">{children}</div>
      </div>
    );
}

Dialog.propTypes ={
    isOpen:PropType.bool,
    children :PropType.element,
    title:PropTypes.string,
    onClose:Proptypes.func.isRequired
}
Dialog.defaultProps ={
    isOpen: false,
    title: '',
}
export default Dialog;
