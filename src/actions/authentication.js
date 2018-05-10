import axios from "axios";
import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../actions/types";


export const signin = (credentials) => ({
  type: SIGN_IN,
  payload: axios.post('http://localhost:8080/user/signin', credentials)
});

export const signout = (credentials) => ({
  type: SIGN_OUT,
  payload: axios.post("/user/signout", credentials)
});

export const signup = (credentials) => ({
  type: SIGN_UP,
  payload: axios.post('http://localhost:8080/user/signup', credentials)
});
