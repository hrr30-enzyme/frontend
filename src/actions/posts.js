import axios from "axios"

import {
  POST_QUESTION,
  POST_ANSWER,
  GET_ANSWERS,
  GET_POST_BY_QUERY,
  VOTE_QUESTION,
  VOTE_QUESTION_DOWN,  
  VOTE_ANSWER_DOWN,  
  VOTE_ANSWER,
  UPDATE_VIEWS,
  RECOMENDATIONS,
} from "./types"

import { ORIGIN } from "../constants";

export const queryString = params =>
  "?" +
  Object.keys(params)
    .filter(key => params[key] !== undefined)
    .map(key => key + "=" + params[key])
    .join("&")

export const queryPosts = (query) => {
  const str = queryString(query);

  return {
    type: GET_POST_BY_QUERY,
    payload: axios.get(`${ORIGIN}/post${str}`)
  }
}

export const postQuestion = (question) => ({
  type: POST_QUESTION,
  payload: axios.post(`${ORIGIN}/question`, question)
})

export const updateQuestionVote = (post) => ({
  type: VOTE_QUESTION,
  payload: axios.patch(`${ORIGIN}/post/upvotes`, post)
})

export const downvoteQuestionVote = (post) => ({
  type: VOTE_QUESTION_DOWN,
  payload: axios.patch(`${ORIGIN}/post/downvotes`, post)
})
  
export const getPostByQuery = (query) => ({
  type: GET_POST_BY_QUERY,
  payload: axios.get(`${ORIGIN}/post${queryString(query)}`) 
})

export const postAnswer = answer => ({
  type: POST_ANSWER,
  payload: axios.post(`${ORIGIN}/answer`, answer)
})

export const updateAnswerVote = (post, id) => ({
  type: VOTE_ANSWER,
  payload: axios.patch(`${ORIGIN}/post/upvotes`, post),
  meta: {
    id: id
  }
})

export const downvoteAnswerVote = (post, id) => ({
  type: VOTE_ANSWER_DOWN,
  payload: axios.patch(`${ORIGIN}/post/downvotes`, post),
  meta: {
    id: id
  }
})

export const updateViews = (post) => ({
  type: UPDATE_VIEWS,
  payload: axios.patch(`${ORIGIN}/post/views`, post)
})

export const getAnswers = (query) => {
  const str = queryString(query);

  return {
    type: GET_ANSWERS,
    payload: axios.get(`${ORIGIN}/post${str}`)
  }
}

export const changeSortedBy = parameter => ({
  type: 'CHANGE_SORTED_BY',
  payload: parameter,
})

export const getRecomendations = () => (dispatch, getState) => {
  const userid = getState().auth.user.id;
  return dispatch({
    type: RECOMENDATIONS,
    payload: axios.get(`${ORIGIN}/user/recomendations/${userid}`)
  })
}