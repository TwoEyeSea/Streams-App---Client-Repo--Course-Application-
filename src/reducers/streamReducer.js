import { FETCH_STREAMS, DELETE_STREAM, CREATE_STREAM, EDIT_STREAM, FETCH_STREAM } from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    // we're using the first spread function to add the current state to a new object and the second spread function to add the new _.mapKeys object.
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    // We don't need to reference a payload.id prop because we've made the payload the streamId in deleteStream action reducer
    default:
      return state;
  }
};
