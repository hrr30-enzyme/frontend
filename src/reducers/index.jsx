import { combineReducers } from 'redux';
import { authentication } from '../reducers/authenticationReducer'
import { questions } from '../reducers/submitQuestionReducer'

//Import reducers below

export default combineReducers({
    authentication,
    questions
});