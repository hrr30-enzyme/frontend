import { INPUT_CHANGE } from '../actions/types'

const initialState = {
  username: '',
  password: '',
  email: '',
  questionTitle: '',
  questionBody: '',
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
      
    default:
      return state
  
  }
}

export default textInput