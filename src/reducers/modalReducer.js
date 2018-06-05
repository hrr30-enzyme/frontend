import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SIGN_IN,
  SIGN_UP,
  POST_QUESTION,
  NO_METAMASK,
} from '../actions/types'

const initialState = {
  signup: false,
  signin: false,
  ask: false,
  noMetaMask: false,
  message: ''
}

const showModal = (state = initialState, action) => {
  switch(action.type){
    case NO_METAMASK:
      return {
        ...state,
        noMetaMask: true,
      }
    case OPEN_MODAL:
      return {
        ...state,
        [action.payload.modal]: true,
        message: action.payload.message
      }

    case CLOSE_MODAL:
      return initialState

    case `${SIGN_IN}_FULFILLED`:
      return initialState

    case `${SIGN_UP}_FULFILLED`:
      return initialState

    case `${POST_QUESTION}_FULFILLED`:
      return initialState

    case `${SIGN_IN}`:
      return initialState

    default:
      return state
  }
}

export default showModal