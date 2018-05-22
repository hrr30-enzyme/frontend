import { combineReducers } from 'redux';

import authentication from '../reducers/authenticationReducer'
import post from '../reducers/postReducer'
import textInput from '../reducers/textInputReducer'
import showModal from '../reducers/modalReducer'
import searchBar from '../reducers/searchBarReducer'

export default combineReducers({
    authentication,
    textInput,
    post,
    showModal,
    searchBar
});