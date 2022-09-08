import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // The renderInput helper method is used to pass JSX to the Field element from the redux-form library.
    // We can destructure the "input" property from formProps.input and call it as a prop within the <input /> element as shown below.

    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        {/* The label prop is destructured within the renderInput function and placed within the <lable></lable> element 
        This will display the string for each label prop as defined within the <Field/> elements below */}
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
    // In most cases when using redux-form we'll return an input element.
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
    //The StreamForm component will receive an onSubmit function from its parent component as a prop
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        {/**NOTE that semantic ui will hide any error messages unless we add the className "error"*/}
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
  form: "streamForm",
  validate,
})(StreamForm);
