import { combineReducers } from 'redux';
import { authentication } from '../reducers/authenticationReducer'
import { questions } from '../reducers/questionsReducer'
import { textInput } from '../reducers/textInputReducer'

//Import reducers below

export default combineReducers({
    authentication,
    questions,
    textInput
});