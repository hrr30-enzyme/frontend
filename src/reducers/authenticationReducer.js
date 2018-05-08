import { SIGN_IN } from '../actions/types'

const intialState = {
    userInfo: {},
    signingIn: false,
    signedIn: false,
    errorSigningIn: false
}

export function authenticationReducer (state = intialState, action){

  switch (action.type){

      case `${SIGN_IN}_PENDING`:
        return {
          ...state,
          signingIn: true
        };
      case `${SIGN_IN}_FULFILLED`:
        return {
          ...state,
          signingIn: false,
          signedIn: true,
          userInfo: action.payload
        };
      case `${SIGN_IN}_REJECTED`:
        return {
          ...state,
          errorSigningIn: true
        };
      default: 
        return state;
  }
}