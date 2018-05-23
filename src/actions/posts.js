import axios from "axios";

import {
  POST_QUESTION,
  GET_QUESTION,
  GET_QUESTIONS,
  POST_ANSWER,
  GET_ANSWER,
  GET_ANSWERS,
  GET_POSTS_BY_QUESTION,
  GET_POST_BY_QUERY,
  GET_ALL_QUESTIONS,
  VOTE_QUESTION,
  VOTE_ANSWER
} from "./types";

import { ORIGIN } from "../constants";

export const queryString = params =>
  "?" +
  Object.keys(params)
    .filter(key => params[key] !== undefined)
    .map(key => key + "=" + params[key])
    .join("&");

export const getPostsByQuestion = postref => {
  const str = queryString({ postref });
  return {
    type: GET_POSTS_BY_QUESTION,
    payload: axios.post(`${ORIGIN}/post${str}`)
  };
};

export const queryPosts = (query) => {
  const str = queryString(query);

  return {
    type: GET_POST_BY_QUERY,
    payload: axios.get(`${ORIGIN}/post${str}`)
  };
};

export const postQuestion = (question) => ({
  type: POST_QUESTION,
  payload: axios.post(`${ORIGIN}/question`, question)
});

export const getQuestion = id => ({
  type: GET_QUESTION,
  payload: axios.get(`${ORIGIN}/questions/${id}`)
});

export const updateQuestionVote = (post) => ({
  type: VOTE_QUESTION,
  payload: axios.patch(`${ORIGIN}/post/upvotes`, post)
});
  
export const getPostByQuery = (query) => ({
  type: GET_POST_BY_QUERY,
  payload: axios.get(`${ORIGIN}/post${queryString(query)}`) 
});

export const getQuestions = () => {
  //const str = queryString();
  return {
    type: GET_QUESTIONS,
    payload: axios.get(`${ORIGIN}/questions/all`)
  };
};

export const getAllQuestions = () => ({
  type: GET_ALL_QUESTIONS,
  payload: axios.get(`${ORIGIN}/questions/all`)
});

export const postAnswer = answer => ({
  type: POST_ANSWER,
  payload: axios.post(`${ORIGIN}/answer`, answer)
});

export const getAnswer = id => ({
  type: GET_ANSWER,
  payload: axios.get(`${ORIGIN}/answer/${id}`)
});

export const updateAnswerVote = (id, type) => ({
  type: VOTE_ANSWER,
  payload: axios.patch(`${ORIGIN}/answers/${id}`, type)
});

export const getAnswers = (query) => {
  const str = queryString(query);

  return {
    type: GET_ANSWERS,
    payload: axios.get(`${ORIGIN}/post${str}`)
  };
};

export const changeSortedBy = parameter => ({
  type: 'CHANGE_SORTED_BY',
  payload: parameter,
});