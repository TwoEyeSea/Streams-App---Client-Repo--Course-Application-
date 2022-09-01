import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {
  renderInput({ input }) {
    // The renderInput helper method is used to pass JSX to the Field element from the redux-form library.
    // We can destructure the "input" property from formProps.input and call it as a prop within the <input /> element as shown below.
    return <input {...input} />;
    // In most cases when using redux-form we'll return an input element.
  }
  render() {
    console.log(this.props);
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
// The reduxForm() function has a similar syntax to the connect() function
// Unlike the connect() funciton which receives multiple arguments, reduxForm() receives a single object and we put different configuration within this object
