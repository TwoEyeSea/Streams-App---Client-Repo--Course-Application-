import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    // The renderInput helper method is used to pass JSX to the Field element from the redux-form library.
    // We can destructure the "input" property from formProps.input and call it as a prop within the <input /> element as shown below.
    return (
      <div className="field">
        <label>{label}</label>
        {/* The label prop is destructured within the renderInput function and placed within the <lable></lable> element 
        This will display the string for each label prop as defined within the <Field/> elements below */}
        <input {...input} />
      </div>
    );
    // In most cases when using redux-form we'll return an input element.
  }
  render() {
    console.log(this.props);
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label={"Enter Title"} />
        {/* Anytime we add a prop to the <Field /> Element that redux-form is NOT familiar with
        The prop will by default be passed to the renderInput() function. */}
        <Field name="description" component={this.renderInput} label={"Enter Description"} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
// The reduxForm() function has a similar syntax to the connect() function
// Unlike the connect() funciton which receives multiple arguments, reduxForm() receives a single object and we put different configuration within this object
