import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push("/")} className="ui dimmer modals visible active">
      {/* semantic ui class names */}
      <div onClick={(e) => e.stopPropagation} className="ui standard modal visible active">
        <div className="header">Delete Stream</div>
        <div className="content">Are you sure you want to delete this stream?</div>
        <div className="actions">
          <div className="ui approve button primary">Delete Stream</div>
          <div className="ui cancel button">Cancel</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
