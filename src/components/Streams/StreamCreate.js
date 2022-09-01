import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    // The renderInput helper method is used to pass JSX to the Field element from the redux-form library.
    // We can destructure the "input" property from formProps.input and call it as a prop within the <input /> element as shown below.
    return (
      <div className="field">
        <label>{label}</label>
        {/* The label prop is destructured within the renderInput function and placed within the <lable></lable> element 
        This will display the string for each label prop as defined within the <Field/> elements below */}
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
    // In most cases when using redux-form we'll return an input element.
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        {/* onSubmit={} is the name of the prop that we're pasisng onto the <form> element.
          this.props.handleSubmit() is a callback function provided to our component by redux-form.
          Now when the form is submitted the handleSubmit() callback function will receive the event object and automatically call event.preventDefault */}
        <Field name="title" component={this.renderInput} label={"Enter Title"} />
        {/* Anytime we add a prop to the <Field/> element that redux-form is NOT familiar with
        The prop will by default be passed to the renderInput() function.
        We can use this syntax to customize the <Field/> element */}
        <Field name="description" component={this.renderInput} label={"Enter Description"} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
// The reduxForm() function has a similar syntax to the connect() function.
// Unlike the connect() funciton which receives multiple arguments, reduxForm() receives a single object and we put different configuration within this object.
// We wire the validate helper function up to the form by adding "validate" to the configuration object within the reduxForm() function.
