import { bindActionCreators } from 'redux'
import { signIn, signOut } from './authentication'
import { submitQuestion } from './submitQuestion'
import { addText } from './inputText'
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
    signIn,
    signOut,
    submitQuestion,
    addText,
    postQuestion,
    getQuestion,
    getQuestions,
    postAnswer,
    getAnswer,
    getAnswers
  }, dispatch)
); 

export default mapDispatchToProps