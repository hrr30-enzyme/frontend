
import { 
  POST_QUESTION, 
  GET_QUESTION, 
  GET_QUESTIONS,
  POST_ANSWER,
  GET_ANSWER,
  GET_ANSWERS,
  GET_POSTS_BY_QUESTION,
  GET_POST_BY_QUERY,
  GET_ALL_QUESTIONS,
  CHANGE_SORTED_BY,
  VOTE_QUESTION,
  VOTE_ANSWER
} from "../actions/types";


const exampleState = {
  /*
    we could use view to change how the pages are viewed
    we might need it to diferentiate between looking at a 
    home page of questions or looking at a single question
    with extra details for example.
    chance we don't need it though
  */
  User: {
    createdAt: undefined,
    email: 'notloggedin@gmail.com',
    id: 1,
    updatedAt: undefined,
    username: 'not logged in!',
  },
  posts: [],
  sortedBy: 'Newest', 
  questions: [
    {
      question: {
        title: 'Title',
        User: {
          createdAt: undefined,
          email: 'notloggedin@gmail.com',
          id: 1,
          updatedAt: undefined,
          username: 'not logged in!',
        },
        body: 'Hey I have a question',
        date: new Date()
      },
      answers: [
        {
          body: 'here is a answer',
          User: {
            createdAt: undefined,
            email: 'notloggedin@gmail.com',
            id: 1,
            updatedAt: undefined,
            username: 'not logged in!',
          },
          date: new Date()
        },
        {
          body: 'here is a 2nd answer',
          User: {
            createdAt: undefined,
            email: 'notloggedin@gmail.com',
            id: 1,
            updatedAt: undefined,
            username: 'not logged in!',
          },
          date: new Date()
        }
      ]
    }
  ]
};

const initialState = {
  User: {
    createdAt: undefined,
    email: 'notloggedin@gmail.com',
    id: 1,
    updatedAt: undefined,
    username: 'not logged in!',
  },
  posts: [],
  questions: [],
  answers: []
};

/*
 * We might not need a lot of these reducers to do anything
 */
const postReducer = (state = exampleState, action) => {
  switch (action.type) {
    case `${POST_QUESTION}_FULFILLED`:
      return {
        ...state,
      };

    case `${POST_QUESTION}_REJECTED`:
      return {
        ...state,
      };

    case `${GET_QUESTION}_FULFILLED`:
      return {
        ...state,
        posts: action.payload.data
      };

    case `${GET_QUESTION}_REJECTED`:
      return {
        ...state,
      };

    case `${GET_QUESTIONS}_FULFILLED`:
      return {
        ...state,
        questions: action.payload.data        
      };

    case `${GET_QUESTIONS}_REJECTED`:
      return {
        ...state,
      };

    case `${POST_ANSWER}_FULFILLED`:
      const newPost = action.payload.data.post;
      newPost.User = state.User;
      newPost.upvoteCount = 0
      return {
        ...state,
        User: state.User,
        answers: [...state.answers, newPost] //, newPost]
      };

    case `${POST_ANSWER}_REJECTED`:
      return {
        ...state,
      };

    case `${VOTE_QUESTION}_REJECTED`:
      return {
        ...state,
      };

    case `${VOTE_ANSWER}_REJECTED`:
      return {
        ...state,
      };

    case `${VOTE_QUESTION}_FULFILLED`:
      const votedPost = action.payload.data[0]
      let newQuestions = state.questions
      newQuestions[0] = votedPost[0]
      newQuestions[0][0].User = state.questions[0].User   
      
      return {
        ...state, 
        questions: newQuestions[0] //, newPost],              
      };


    case `${VOTE_ANSWER}_FULFILLED`:
      const votedAnswer = action.payload.data[0][0][0]
      let newAnswers = []
      for (let i = 0; i < state.answers.length; i++) {
        if (state.answers[i].id === votedAnswer.id) {
          newAnswers[i] = votedAnswer
        } else {
          newAnswers[i] = state.answers[i]
        }
      }
      return {
        ...state, 
        answers: newAnswers //, newPost],              
      };

    case `${GET_ANSWER}_FULFILLED`:
      return {
        ...state,
        
      };
    
    case `${GET_ANSWER}_REJECTED`:
      return {
        ...state,
      };  

    case `${GET_ANSWERS}_FULFILLED`:
      return {
        ...state,
        answers: action.payload.data
      };

    case `${GET_ANSWERS}_REJECTED`:
      return {
        ...state,
      };
    case `${GET_POSTS_BY_QUESTION}_FULFILLED`:
      return {
        ...state,
        questions: action.payload.data
      };

    case `${GET_POSTS_BY_QUESTION}_REJECTED`:
      return {
        ...state,
      };

    case `${GET_POST_BY_QUERY}_PENDING`:
      console.log('getpostbyquery', action);
      return {
        sortedBy: 'pending',
        ...state,
      }

    case `${GET_POST_BY_QUERY}_FULFILLED`:
      return {
        ...state,
        posts: action.payload.data,
        questions: action.payload.data,
      };

    case `${GET_POST_BY_QUERY}_REJECTED`:
      return {
        sortedBy: 'unable to find posts',
        ...state,
      };

    case `${GET_ALL_QUESTIONS}_FULFILLED`:
      return {
        ...state,
        questions: action.payload.data
      };

    case `${GET_ALL_QUESTIONS}_REJECTED`:
      return {
        ...state,
      };
    
    case CHANGE_SORTED_BY:
      return {
        ...state,
        sortedBy: action.payload,
      };

    case `SIGN_IN_FULFILLED`:
      console.log('sign in fulfilled', action)
      return {
        ...state,
        User: action.payload.data
      };
      
    default:
      return state;
  }
}

export default postReducer