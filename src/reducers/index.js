import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// To maintain clarity of our reducers we can import the reducer object from redux-form with additional syntax
// importing the reducer "as formReducer" and calling this object by calling formReducer as shown below.
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
