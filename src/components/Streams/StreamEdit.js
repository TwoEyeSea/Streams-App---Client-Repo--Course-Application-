import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions/index";
import StreamForm from "./StreamForm";
import _ from "lodash";
//importing the fetchStream action creator because this application is making use of URL Navigation
// This StreamEdit component needs to have access to the data by itself to be function (even in the event of the user loading this component first)
// Otherwise users will always need to load the StreamList component first to fetch the required data.
// Now the StreamEdit Component will fetchn the required data necessary to edit this stream via componentDidMount.

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    //Since our components are being rendered by Route elements from React-Router-Dom, our components are automatically passed React-Router-Dom specific props.
    // Among the props received is the "match" prop which provides us with our stream ID which we've defined on the URL using wildcard colon variables
  }

  onSubmit = (formValues) => {
    // this.props.editStream(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, "title", "description")} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
