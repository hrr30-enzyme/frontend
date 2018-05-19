import axios from "axios";
import { SIGN_IN, SIGN_OUT, SIGN_UP, CHECK_SIGN_IN } from "../actions/types";
import { ORIGIN } from '../constants'

// axios.defaults.withCredentials = true;

export const signin = (credentials) => ({
  type: SIGN_IN,
  payload: axios.post(`${ORIGIN}/user/signin`, credentials)
});

export const signout = (credentials) => ({
  type: SIGN_OUT,
  payload: axios.post(`${ORIGIN}/user/signout`, credentials)
});

export const signup = (credentials) => ({
  type: SIGN_UP,
  payload: axios.post(`${ORIGIN}/user/signup`, credentials)
});

export const checkSignin = () => ({
  type: CHECK_SIGN_IN,
  payload: axios.get(`${ORIGIN}/user`)
});