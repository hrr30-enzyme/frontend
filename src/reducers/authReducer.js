import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  CLOSE_MODAL,
} from "../actions/types"

import isEmpty from 'lodash/isEmpty'

const intialState = {
  user: {},
  address: '',
  isAuthenticated: false,
  error: ''
}

const auth = (state = intialState, action) => {
  switch (action.type) {
    
    case `WEB3_INITIALIZED`:
      return {
        ...state,
        address: action.payload.account[0]
      }

    case `${SIGN_IN}`:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user.user
      }

    case `${SIGN_OUT}_FULFILLED`:
      return {
        ...state,
        user: {},
        isAuthenticated: false
      }

    case `${SIGN_UP}_FULFILLED`:
      return {
        ...state,
        error: 'signup successful'
      }

    case `${SIGN_UP}_REJECTED`:
      return {
        ...state,
        error: action.payload.response.data,
      }

    case CLOSE_MODAL:
      return {
        ...state,
        error: '',
      }

    default:
      return state
  }
}

export default auth