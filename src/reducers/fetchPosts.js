import { FETCH_POSTS } from '../actions/types'

const intialState = {
    posts: []
}

export default function (state = intialState, action){
  switch (action.type){
      case FETCH_POSTS:
        return {
          ...state, 
          posts: action.payload
        };
      default:
        return state;
  }
}