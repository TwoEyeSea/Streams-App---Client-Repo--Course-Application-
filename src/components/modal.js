import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      {/* semantic ui class names */}
      <div className="ui standard modal visible active">reqreqftrqfeq</div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
