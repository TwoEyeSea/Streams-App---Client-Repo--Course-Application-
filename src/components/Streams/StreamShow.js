import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    // In order to define a reference we need to call the constructor method and define the ref on the super ref.
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    console.log(this.videoRef);
    this.buildPlayer();
    //Provided that we fetch a stream and update/re-render our state the componentDidUpdate lifecycle method will call this.buildPlayer().
    // This allows us to delay the buildPlayer function until after the stream is fetched and the application re-renders.
  }

  // Helper function that allows the application to wait until we've fetched a stream
  buildPlayer() {
    if (this.player || !this.props.stream) {
      // if we already have a player object or the stream hasn't been fetched as yet we'll return early
      // Otherwise we will proceed to build the video player.
      return;
    }
    const { id } = this.props.match.params.id;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        {/* We can access this video element using the "Refs" method */}
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
