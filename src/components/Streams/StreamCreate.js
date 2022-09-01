import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {
  render() {
    console.log(this.props);
    return (
      <form>
        <Field name="title" />
        <Field name="description" />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
// The reduxForm() function has a similar syntax to the connect() function
// Unlike the connect() funciton which receives multiple arguments, reduxForm() receives a sing object and we put different configuration within this object
