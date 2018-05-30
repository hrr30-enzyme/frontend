import axios from "axios"
import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../actions/types"
import { ORIGIN } from '../constants'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import jwt from 'jsonwebtoken'

export const setCurrentUser = (user) => {
  return {
    type: SIGN_IN,
    user
  }
} 

export const login = (data) => {
  return dispatch => {
    return axios.post(`${ORIGIN}/user/signin`, data).then(res => {
      const token = res.data.token
      localStorage.setItem('jwtToken', token)
      setAuthorizationToken(token)
      dispatch(setCurrentUser(jwt.decode(token)))
    })
  }
}

export const signout = (credentials) => ({
  type: SIGN_OUT,
  payload: axios.post(`${ORIGIN}/user/signout`, credentials)
})

export const signup = (credentials) => ({
  type: SIGN_UP,
  payload: axios.post(`${ORIGIN}/user/signup`, credentials)
})