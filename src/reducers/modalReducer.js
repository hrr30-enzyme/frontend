import {
  OPEN_MODAL, 
  CLOSE_MODAL,
  SIGN_IN,
  SIGN_UP,
} from '../actions/types'

const initialState = {
  signup: false,
  signin: false,
  ask: false
}

const showModal = (state = initialState, action) => {
  switch(action.type){
    case OPEN_MODAL:
      return {
        ...state,
        [action.payload.modal]: true
      };
      
    case CLOSE_MODAL:
      return initialState;
    
    case `${SIGN_IN}_FULFILLED`:
      return initialState;

    case `${SIGN_UP}_FULFILLED`:
      return initialState;

    default:
      return state
  }
}

export default showModal;