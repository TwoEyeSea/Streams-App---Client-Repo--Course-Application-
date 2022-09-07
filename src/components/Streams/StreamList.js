import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    // Helper function to provide the logic necessary to determine if the delete and edit buttons should be displayed for a given stream.
    // If the stream's userId state === currentUserId state we'll render the administrative buttons.
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button red">Delete</button>
        </div>
      );
    }
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
            {stream.title}
            <div className="description"> {stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
