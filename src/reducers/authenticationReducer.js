import { SIGN_IN, SIGN_OUT } from '../actions/types'

const intialState = {
    userInfo: {},
    signedIn: false,
    error: false
}

export function authentication (state = intialState, action){

  switch (action.type){

      case `${SIGN_IN}_SUCCESSFUL`:
        return {
          ...state,
          signedIn: true,
          userInfo: action.userInfo
        };
      case `${SIGN_IN}_FAILED`:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      
      case `${SIGN_OUT}_SUCCESSFUL`:
        return {
          ...state,
          userInfo: {},
          signedIn: false
        };

      case `${SIGN_OUT}_FAILED`:
        return {
          ...state,
          signedIn: true,
          error: action.error
        }
      
      default: 
        return state;
  }
}