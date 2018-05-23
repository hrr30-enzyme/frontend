import { bindActionCreators } from 'redux'
import { signin, signout, signup, checkSignin } from './authentication'
import { addText, clearAll, clearText } from './inputText'
import { openModal, closeModal } from './modal'
import { search, suggest } from './search'
<<<<<<< HEAD
import {
  noMetaMask,
  getMinBounty,
  getDuration,
  getAnswerFee,
  getQuestionsCount,
  upVote,
  payoutWinner,
  createAnswer,
  createQuestion,
} from './web3'
=======
>>>>>>> Add functionality for search suggestions
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
  downvoteQuestionVote,
  getRecomendations,
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
    updateViews,
    downvoteAnswerVote,
<<<<<<< HEAD
<<<<<<< HEAD
    downvoteQuestionVote,
    noMetaMask,
    getMinBounty,
    getDuration,
    getAnswerFee,
    getQuestionsCount,
    upVote,
    payoutWinner,
    createAnswer,
    createQuestion,
    suggest,
    getRecomendations,
=======
    downvoteQuestionVote
=======
    suggest
>>>>>>> Add functionality for search suggestions
>>>>>>> Add functionality for search suggestions
=======
    downvoteQuestionVote,
    suggest
>>>>>>> Fix merge conflicts
  }, dispatch)
); 

export default mapDispatchToProps
