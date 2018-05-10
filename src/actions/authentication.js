import axios from "axios";
import {
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESSFUL,
  SIGN_OUT_FAILED,
  SIGN_OUT_SUCCESSFUL
} from "../actions/types";

export const sendSignIn = credentials => {
  return axios.post("/user/sign-in", credentials);
};

export const signedIn = userInfo => ({
  type: SIGN_IN_SUCCESSFUL,
  payload: {
    userInfo
  }
});

export const doNotSignIn = error => ({
  type: SIGN_IN_FAILED,
  payload: {
    error
  }
});

export const signIn = credentials => {
  return function(dispatch) {
    return sendSignIn(credentials).then(
      userInfo => dispatch(signedIn(userInfo)),
      error => dispatch(doNotSignIn(error))
    );
  };
};

function sendSignOut(credentials) {
  return axios.post("/user/sign-out", credentials);
}

function signedOut(status) {
  return {
    type: SIGN_OUT_SUCCESSFUL,
    payload: {
      status
    }
  };
}

const doNotSignOut = error => ({
  type: SIGN_OUT_FAILED,
  payload: {
    error
  }
});

export const signOut = function(credentials) {
  return function(dispatch) {
    return sendSignOut(credentials).then(
      status => dispatch(signedOut(status)),
      error => dispatch(doNotSignOut(error))
    );
  };
};
