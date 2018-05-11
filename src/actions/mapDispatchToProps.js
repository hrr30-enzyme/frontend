import { bindActionCreators } from 'redux'
import { signin, signout } from './authentication'
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
    signin,
    signout,
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
