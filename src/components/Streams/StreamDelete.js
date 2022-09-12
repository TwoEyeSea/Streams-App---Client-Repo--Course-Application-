import React from "react";
import Modal from "../modal";
import history from "../../history";
import { fetchStream } from "../../actions/index";
import { connect } from "react-redux";

class StreamDelete extends React.Component {
  componentDidMount(props) {
    console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  renderedActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button"> Cancel</button>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to deleete this stream?";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        // To make the modal more reusable we're going to pass a prop called title and add a string to that prop that will be displayed.
        // Within the modal itself we'll call props.title to display any given title we pass to the modal in the future.
        title={`Delete Stream`}
        content={this.renderContent()}
        actions={this.renderedActions()}
        //Don't forget when using class based component helper functions we need to call this.xxxx
        onDismiss={() => history.push("/")}
        // We've defined multiple props on the modal from the parent to ensure that the modal can be imported and reused by multiple parent objects
        // by follow the same convention.
        // onDismiss is standard volcabulary for parental programmatic navigation
      />
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  return {
    stream: state.streams[ownprops.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);
