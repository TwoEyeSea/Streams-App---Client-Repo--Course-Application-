import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";
import streams from "../apis/streams";
// imported the variables from the ./types dir to reduce the chances of making transcription typos when defining types.

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

export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post("/streams", formValues);
  // The .post() request is a RESTful convention, we're making a post request to '/streams' with our formValues data.

  dispatch({ type: CREATE_STREAM, payload: response.data });
  // we give the payload a value of response.data because we only care about the information from the request
  // In this case, response.data will contain information on the title and description of a stream.
};
