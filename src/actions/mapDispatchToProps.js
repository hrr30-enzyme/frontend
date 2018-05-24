import { bindActionCreators } from 'redux'
import { signin, signout, signup, checkSignin } from './authentication'
import { addText, clearAll, clearText } from './inputText'
import { openModal, closeModal } from './modal'
import { search } from './search'
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
    updateViews,
    downvoteAnswerVote,
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
  }, dispatch)
); 

export default mapDispatchToProps
