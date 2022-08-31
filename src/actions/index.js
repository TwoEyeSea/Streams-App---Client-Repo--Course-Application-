import { SIGN_IN, SIGN_OUT } from "./types";
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
