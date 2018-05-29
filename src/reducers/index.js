import { combineReducers } from 'redux';

import authentication from '../reducers/authenticationReducer'
import post from '../reducers/postReducer'
import textInput from '../reducers/textInputReducer'
import showModal from '../reducers/modalReducer'
import web3 from './web3Reducer'

export default combineReducers({
    authentication,
    textInput,
    post,
    showModal,
    web3
})