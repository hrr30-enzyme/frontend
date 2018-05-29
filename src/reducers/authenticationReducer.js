import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  CLOSE_MODAL,
} from "../actions/types"

const intialState = {
  userInfo: {
    createdAt: undefined,
    email: 'notloggedin@gmail.com',
    id: 1,
    updatedAt: undefined,
    username: 'not logged in!',
  },
  signedIn: false,
  error: false,
}

const authentication = (state = intialState, action) => {
  switch (action.type) {
    case `${SIGN_IN}_FULFILLED`:
      console.log('sign in fulfilled', action)
      return {
        ...state,
        signedIn: true,
        userInfo: action.payload.data,
        error: 'login successful',
      }
    case `${SIGN_IN}_REJECTED`:
      return {
        ...state,
        error: action.payload.response.data,
      }

    case `${SIGN_OUT}_FULFILLED`:
      return {
        ...state,
        userInfo: {},
        signedIn: false
      }

    case `${SIGN_OUT}_REJECTED`:
      return {
        ...state,
        signedIn: true,
        error: action.payload.error
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

export default authentication