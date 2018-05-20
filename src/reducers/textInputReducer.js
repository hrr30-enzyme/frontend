import { INPUT_CHANGE, CLEAR_ALL_INPUTS, CLOSE_MODAL } from '../actions/types'

const initialState = {
  username: '',
  password: '',
  email: '',
  title: '',
  body: '',
  answerBody: '',
  commentBody: ''
};

const textInput = (state = initialState, action) => {
  switch(action.type){
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
      return initialState;
      
    default:
      return state
  
  }
}

export default textInput