import { POST_QUESTION, POST_ANSWER, POST_COMMENT, SIGN_OUT, SIGN_IN } from '../actions/types'

const intialState = {
    posts: [],
    userInfo: {}
    //Question title input
    //Question body input
    //Answer body input
    //Comment body input
}

export default function (state = intialState, action){
  switch (action.type){
      case POST_QUESTION:
        return {
          ...state, 
          posts: action.payload
        };
      case POST_ANSWER:
        return {
          ...state,
          posts: action.payload
        };
      case POST_ANSWER:
        return {
          ...state,
          posts: action.payload
        };
      case SIGN_OUT:
        return {
          ...state,
          userInfo: {}
        };
      case SIGN_IN:
        return {
          ...state,
          userInfo: action.payload
        };
      default:
        return state;
  }
}