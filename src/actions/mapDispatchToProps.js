import { bindActionCreators } from 'redux'
import { signin, signout, signup } from './authentication'
import { addText } from './inputText'
import { openModal, closeModal } from './modal'
import {
  postQuestion,
  getQuestion,
  getQuestions,
  postAnswer,
  getAnswer,
  getAnswers,
  getAllQuestions
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
    postAnswer,
    getAnswer,
    getAnswers,
    openModal,
    closeModal,
    getAllQuestions
  }, dispatch)
); 

export default mapDispatchToProps
