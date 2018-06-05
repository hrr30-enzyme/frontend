import { 
  INPUT_CHANGE, 
  CLEAR_ALL_INPUTS, 
  CLOSE_MODAL, 
  SIGN_IN,
  SIGN_UP,
  POST_QUESTION,
  POST_ANSWER
} from '../actions/types'

const initialState = {
  username: '',
  password: '',
  email: '',
  title: '',
  body: '',
  bounty: '',
  answerBody: '',
  commentBody: '',
  search: ''
}

const textInput = (state = initialState, action) => {
  switch(action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.inputType]: action.payload.input
      }

    case CLEAR_ALL_INPUTS:
      return {
        ...initialState
      }

    case CLOSE_MODAL:
      return initialState

    case `${SIGN_IN}_FULFILLED`:
      return initialState

    case `${SIGN_UP}_FULFILLED`:
      return initialState
      
    case `${POST_QUESTION}_FULFILLED`:
      return initialState

    case `${POST_ANSWER}_FULFILLED`:
      return initialState
      
    default:
      return state
       
  }
}

export default textInput