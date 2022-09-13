import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  // Helper Function - Edit and Delete Buttons
  renderAdmin = (stream) => {
    // Helper function to provide the logic necessary to determine if the delete and edit buttons should be displayed for a given stream.
    // If the stream's userId state === currentUserId state we'll render the administrative buttons.
    if (!stream.userId) {
      return;
    } else if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
            Edit
          </Link>
          <Link className="ui button red" to={`/streams/delete/${stream.id}`}>
            Delete
          </Link>
        </div>
      );
    }
    return;
  };

  renderList() {
    console.log(this.props.streams);
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          {/* Helper function containing logic to determine if admin buttons should be rendered for a given stream (based on userId) */}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/show/${stream.id}`}>
              {stream.title}
              <div className="description"> {stream.description}</div>
            </Link>
          </div>
        </div>
      );
    });
  }

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create New Stream
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
