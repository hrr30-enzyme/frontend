import { combineReducers } from 'redux';

import auth from '../reducers/authReducer'
import post from '../reducers/postReducer'
import textInput from '../reducers/textInputReducer'
import showModal from '../reducers/modalReducer'
import web3 from './web3Reducer'

export default combineReducers({
    auth,
    textInput,
    post,
    showModal,
    web3
})