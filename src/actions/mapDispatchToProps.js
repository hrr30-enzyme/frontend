import { bindActionCreators } from 'redux'
import { signin, signout, signup, checkSignin } from './authentication'
import { addText, clearAll, clearText } from './inputText'
import { openModal, closeModal } from './modal'
<<<<<<< HEAD
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
=======
import { search, suggest, clearSuggest } from './search'
>>>>>>> Add searchbar autocomplete functionality
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
<<<<<<< HEAD
  getRecomendations,
=======
>>>>>>> Add searchbar autocomplete functionality
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
<<<<<<< HEAD
    suggest
>>>>>>> Fix merge conflicts
=======
    suggest,
    clearSuggest
>>>>>>> Add searchbar autocomplete functionality
  }, dispatch)
); 

export default mapDispatchToProps
