import React from "react";
import Modal from "../modal";

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
      <Modal title="Delete Streams" content="Are you sure you want to delete this stream?" actions={actions} />
      {/* To make the modal more reusable we're going to pass a prop called title and add a string to that prop that will be displayed.
      Within the modal itself we'll call props.title to display any given title we pass to the modal in the future. */}
    </div>
  );
};

export default StreamDelete;
