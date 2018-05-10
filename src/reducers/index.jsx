import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import authentication from '../reducers/authenticationReducer'
import questions from '../reducers/questionsReducer'
import textInput from '../reducers/textInputReducer'

export default combineReducers({
    authentication,
    questions,
    textInput,
    routerReducer
});