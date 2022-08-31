import { SIGN_IN, SIGN_OUT } from "../actions/types";
const INITIAL_STATE = {
  // NB the capitalized syntax indicates that this variable is a true constant that should not be modified.
  isSignedIn: null,
};

export default (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
