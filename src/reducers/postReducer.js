
import { 
  POST_QUESTION, 
  GET_QUESTION, 
  GET_QUESTIONS,
  POST_ANSWER,
  GET_ANSWER,
  GET_ANSWERS
} from "../actions/types";


const exampleState = {
  /*
    we could use view to change how the pages are viewed
    we might need it to diferentiate between looking at a 
    home page of questions or looking at a single question
    with extra details for example.
    chance we don't need it though
  */
  view: null, 
  questions: [
    {
      question: {
        title: 'Title',
        body: 'Hey I have a question',
        date: new Date()
      },
      answers: [
        {
          body: 'here is a answer',
          date: new Date()
        },
        {
          body: 'here is a 2nd answer',
          date: new Date()
        }
      ]
    }
  ]
};

const intialState = {
  posts: {}
};

/*
 * We might not need a lot of these reducers to do anything
 */
const authentication = (state = exampleState, action) => {
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
      };

    case `${GET_QUESTION}_REJECTED`:
      return {
        ...state,
      };

    case `${GET_QUESTIONS}_FULFILLED`:
      return {
        ...state,
      };

    case `${GET_QUESTIONS}_REJECTED`:
      return {
        ...state,
      };

    case `${POST_ANSWER}_FULFILLED`:
      return {
        ...state,
      };

    case `${POST_ANSWER}_REJECTED`:
      return {
        ...state,
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
      };

    case `${GET_ANSWERS}_REJECTED`:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default authentication