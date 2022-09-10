import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT, FETCH_STREAMS, DELETE_STREAM, CREATE_STREAM, EDIT_STREAM, FETCH_STREAM } from "./types";
// imported the variables from the ./types dir to reduce the chances of making transcription typos when defining types.
import history from "../history";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = await streams.post("/streams", { ...formValues, userId });
  // The .post() request is a RESTful convention, we're making a post request to '/streams' with our formValues data.
  // We're posting an object that consists of the formValues data and the userId data using ES15 syntax

  dispatch({ type: CREATE_STREAM, payload: response.data });
  // we give the payload a value of response.data because we only care about the information from the request
  // In this case, response.data will contain information on the title and description of a stream.

  history.push("/");
  //"push" is the method we call to navigate the user around. We call push and then specify the path we want the user to go to.
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (streamId) => async (dispatch) => {
  const response = await streams.get(`/streams/${streamId}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (streamId, formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.put(`/streams/${streamId}`, { ...formValues, userId });
  // To modify a record we need the ID of individual stream we want to modify/update and the actual updates we intend on making to the stream.
  // We pass the streamId and the formValues terms as arges to the action creator.

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStreams = (streamId) => async (dispatch) => {
  await streams.delete(`/streams/${streamId}`);

  dispatch({ type: DELETE_STREAM, payload: streamId });
};
