import { bindActionCreators } from 'redux'
import { signin, signout, signup } from './authentication'
import { addText } from './inputText'
import { openModal, closeModal } from './modal'
import {
  postQuestion,
  getQuestion,
  getQuestions,
  getPostByQuery,
  postAnswer,
  getAnswer,
  getAnswers
} from './posts'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ 
    signin,
    signout,
    signup,
    addText,
    postQuestion,
    getQuestion,
    getQuestions,
    getPostByQuery,
    postAnswer,
    getAnswer,
    getAnswers,
    openModal,
    closeModal
  }, dispatch)
); 

export default mapDispatchToProps
