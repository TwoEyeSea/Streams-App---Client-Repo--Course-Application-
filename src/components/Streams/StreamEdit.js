import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/index";
//importing the fetchStream action creator because this application is making use of URL Navigation
// This StreamEdit component needs to have access to the data by itself to be function (even in the event of the user loading this component first)
// Otherwise users will always need to load the StreamList component first to fetch the required data.
// Now the StreamEdit Component will fetchn the required data necessary to edit this stream via componentDidMount.

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    return <div>StreamEdit</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamEdit);
