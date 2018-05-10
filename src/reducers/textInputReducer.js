const initialState = {
  userName: '',
  password: '',
  email: '',
  questionTitle: '',
  questionBody: '',
  answerBody: '',
  commentBody: ''
};

export const textInput = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TEXT':
      return {
        ...state,
        [action.payload.inputType]: action.payload.input
      }
      
    default:
      return state
  
  }
} 