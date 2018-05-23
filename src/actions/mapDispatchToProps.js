import { bindActionCreators } from 'redux'
import { signin, signout, signup, checkSignin } from './authentication'
import { addText, clearAll, clearText } from './inputText'
import { openModal, closeModal } from './modal'
import { search, suggest } from './search'
import {
  postQuestion,
  getQuestion,
  getQuestions,
  updateQuestionVote,
  getPostByQuery,
  postAnswer,
  getAnswer,
  getAnswers,
  updateAnswerVote,
  getAllQuestions,
  queryPosts,
  changeSortedBy,
  updateViews,
  downvoteAnswerVote,
  downvoteQuestionVote
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
    updateQuestionVote,
    getPostByQuery,
    postAnswer,
    getAnswer,
    getAnswers,
    updateAnswerVote,
    openModal,
    closeModal,
    getAllQuestions,
    queryPosts,
    changeSortedBy,
    clearText,
    clearAll,
    search,
<<<<<<< HEAD
    updateViews,
    downvoteAnswerVote,
    downvoteQuestionVote
=======
    suggest
>>>>>>> Add functionality for search suggestions
  }, dispatch)
); 

export default mapDispatchToProps
