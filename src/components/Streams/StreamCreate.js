import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";
class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
// The reduxForm() function has a similar syntax to the connect() function.
// Unlike the connect() funciton which receives multiple arguments, reduxForm() receives a single object and we put different configuration within this object.
// We wire the validate helper function up to the form by adding "validate" to the configuration object within the reduxForm() function.
