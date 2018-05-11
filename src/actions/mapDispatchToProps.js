import { bindActionCreators } from 'redux'
import { signin, signout } from './authentication'
import { addText } from './inputText'
import { openModal, closeModal } from './modal'
import {
  postQuestion,
  getQuestion,
  getQuestions,
  postAnswer,
  getAnswer,
  getAnswers
} from './posts'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ 
    signin,
    signout,
    addText,
    postQuestion,
    getQuestion,
    getQuestions,
    postAnswer,
    getAnswer,
    getAnswers,
    openModal,
    closeModal
  }, dispatch)
); 

export default mapDispatchToProps
