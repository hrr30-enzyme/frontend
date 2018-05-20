import { bindActionCreators } from 'redux'
import { signin, signout, signup, checkSignin } from './authentication'
import { addText } from './inputText'
import { openModal, closeModal } from './modal'
import {
  postQuestion,
  getQuestion,
  getQuestions,
  getPostByQuery,
  postAnswer,
  getAnswer,
  getAnswers,
  getAllQuestions,
  queryPosts,
  changeSortedBy,
} from './posts'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ 
    checkSignin,
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
    closeModal,
    getAllQuestions,
    queryPosts,
    changeSortedBy,
  }, dispatch)
); 

export default mapDispatchToProps
