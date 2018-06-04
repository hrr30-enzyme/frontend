import { bindActionCreators } from 'redux'

import { signout, signup, login } from './auth'

import { addText, clearAll, clearText } from './inputText'

import { openModal, closeModal } from './modal'

import {
  noMetaMask,
  getQuestionCount,
  upVote,
  payout,
  createAnswer,
  createQuestion,
} from './web3'

import {
  postQuestion,
  updateQuestionVote,
  getPostByQuery,
  postAnswer,
  getAnswers,
  updateAnswerVote,
  queryPosts,
  changeSortedBy,
  updateViews,
  downvoteQuestionVote,
  downvoteAnswerVote,
  getRecomendations,
} from './posts'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ 
    login,
    signout,
    signup,
    addText,
    postQuestion,
    updateQuestionVote,
    getPostByQuery,
    postAnswer,
    getAnswers,
    updateAnswerVote,
    openModal,
    closeModal,
    queryPosts,
    changeSortedBy,
    clearText,
    clearAll,
    updateViews,
    downvoteQuestionVote,
    downvoteAnswerVote,
    noMetaMask,
    getQuestionCount,
    upVote,
    payout,
    createAnswer,
    createQuestion,
    getRecomendations
  }, dispatch)
)

export default mapDispatchToProps
