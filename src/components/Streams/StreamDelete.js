import React from "react";
import Modal from "../modal";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button"> Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal
        // To make the modal more reusable we're going to pass a prop called title and add a string to that prop that will be displayed.
        // Within the modal itself we'll call props.title to display any given title we pass to the modal in the future.
        title="Delete Streams"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push("/")}
        // We've defined multiple props on the modal from the parent to ensure that the modal can be imported and reused by multiple parent objects
        // by follow the same convention.
        // onDismiss is standard volcabulary for parental programmatic navigation
      />
    </div>
  );
};

export default StreamDelete;
