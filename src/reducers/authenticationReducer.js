import {SIGN_IN_FAILED, SIGN_IN_SUCCESSFUL, SIGN_OUT_FAILED, SIGN_OUT_SUCCESSFUL} from '../actions/types'

const intialState = {
    userInfo: {},
    signedIn: false,
    error: false
}

export function authentication (state = intialState, action){

  switch (action.type){

      case SIGN_IN_SUCCESSFUL:
        return {
          ...state,
          signedIn: true,
          userInfo: action.payload.userInfo
        };
      case SIGN_IN_FAILED:
        return {
          ...state,
          error: action.payload.error,
          loading: false
        };
      
      case SIGN_OUT_SUCCESSFUL:
        return {
          ...state,
          userInfo: {},
          signedIn: false
        };

      case SIGN_OUT_FAILED:
        return {
          ...state,
          signedIn: true,
          error: action.payload.error
        }
      
      default: 
        return state;
  }
}