
import { 
  POST_QUESTION, 
  POST_ANSWER,
  GET_ANSWERS,
  GET_POST_BY_QUERY,
  CHANGE_SORTED_BY,
  VOTE_QUESTION,
  VOTE_QUESTION_DOWN,
  VOTE_ANSWER,
  VOTE_ANSWER_DOWN
} from "../actions/types"

const initialState = {
  questions: [{}],
  answers: [{}]
}

/*
 * We might not need a lot of these reducers to do anything
 */
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_QUESTION}_FULFILLED`:
      return {
        ...state,
      }

    case `${POST_QUESTION}_REJECTED`:
      return {
        ...state,
      }

    case `${POST_ANSWER}_FULFILLED`:
      const newPost = action.payload.data.post;
      newPost.User = state.User;
      newPost.upvoteCount = 0
      return {
        ...state,
        User: state.User,
        answers: [...state.answers, newPost] //, newPost]
      }

    case `${POST_ANSWER}_REJECTED`:
      return {
        ...state,
      }

    case `${VOTE_QUESTION}_REJECTED`:
      return {
        ...state,
      }

    case `${VOTE_ANSWER}_REJECTED`:
      return {
        ...state,
      }

    case `${VOTE_QUESTION}_FULFILLED`:
      let newQuestions = []
      newQuestions.push(state.questions[0])
      newQuestions[0].upvoteCount++
      return {
        ...state, 
        questions: newQuestions //, newPost],              
      }

    case `${VOTE_QUESTION_DOWN}_FULFILLED`:
      let newQuestionsDown = []
      newQuestionsDown.push(state.questions[0])
      newQuestionsDown[0].upvoteCount--
      return {
        ...state, 
        questions: newQuestionsDown //, newPost],              
      }


    case `${VOTE_ANSWER}_FULFILLED`:
      let answerCopy = []
      for (let i = 0; i < state.answers.length; i++) {
        if (state.answers[i].id === action.meta.id) {
          answerCopy[i] = state.answers[i]
          answerCopy[i].upvoteCount++
        } else {
          answerCopy[i] = state.answers[i]
        }
      }
      return {
        ...state,   
        answers: answerCopy       
      }

    case `${VOTE_ANSWER_DOWN}_FULFILLED`:
      let answerCopyDown = []
      for (let i = 0; i < state.answers.length; i++) {
        if (state.answers[i].id === action.meta.id) {
          answerCopyDown[i] = state.answers[i]
          answerCopyDown[i].upvoteCount--
        } else {
          answerCopyDown[i] = state.answers[i]
        }
      }
      return {
        ...state,   
        answers: answerCopyDown       
      }

    case `${GET_ANSWERS}_PENDING`:
      return {
        ...state,
      }

    case `${GET_ANSWERS}_FULFILLED`:
      return {
        ...state,
        answers: action.payload.data
      }

    case `${GET_ANSWERS}_REJECTED`:
      return {
        ...state,
      }

    case `${GET_POST_BY_QUERY}_PENDING`:
      console.log('getpostbyquery', action)
      return {
        sortedBy: 'pending',
        ...state,
      }

    case `${GET_POST_BY_QUERY}_FULFILLED`:
      return {
        ...state,
        questions: action.payload.data,
      }

    case `${GET_POST_BY_QUERY}_REJECTED`:
      return {
        sortedBy: 'unable to find posts',
        ...state,
      }
    
    case `${CHANGE_SORTED_BY}`:
      return {
        ...state,
        sortedBy: action.payload,
      }

    case 'RECOMENDATIONS_FULFILLED':
      return {
        ...state,
        posts: action.payload.data,
        questions: action.payload.data,
      }

    default:
      return state

  }
}

export default postReducer