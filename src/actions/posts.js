import axios from "axios";

import { 
  POST_QUESTION, 
  GET_QUESTION, 
  GET_QUESTIONS,
  POST_ANSWER,
  GET_ANSWER,
  GET_ANSWERS,
  GET_POSTS_BY_QUESTION,
  GET_POST_BY_QUERY
} from './types'

import { ORIGIN } from '../constants'


const queryString = (params) => 
  '?' + Object.keys(params)
    .filter((key) => params[key] !== undefined)
    .map((key) => key + '=' + params[key])
    .join('&')

export const getPostsByQuestion = (postref) => {
  const str = queryString({postref});
  return {
    type: GET_POSTS_BY_QUESTION,
    payload: axios.post(`${ORIGIN}/post${str}`)
  }
}

export const queryPosts = ({
  userid, 
  title, 
  type,
  // sortedBy,
  // sortDirection,
  // TODO backend support
  // sort by date
  // sort by likes
  // sort by relavence to user
  // sort by views
}) => {
  const str = queryString({
    userid,
    title,
    type
  });

  return {
    type: GET_POST_BY_QUERY,
    payload: axios.post(`${ORIGIN}/post${str}`)
  }
}

export const postQuestion = (question) => ({
  type: POST_QUESTION,
  payload: axios.post(`${ORIGIN}/question`, question)
});

export const getQuestion = (id) => ({
  type: GET_QUESTION,
  payload: axios.get(`${ORIGIN}/questions/${id}`) 
});

export const getQuestions = (query) => {
  const str = queryString(query);
  return {
    type: GET_QUESTIONS,
    payload: axios.get(`${ORIGIN}/questions${str}`)
  };
};

export const postAnswer = (id) => ({
  type: POST_ANSWER,
  payload: axios.post(`${ORIGIN}/answer/${id}`)
});

export const getAnswer = (id) => ({
  type: GET_ANSWER,
  payload: axios.get(`${ORIGIN}/answer/${id}`) 
});

export const getAnswers = (query) => {
  const str = queryString(query);
  return {
    type: GET_ANSWERS,
    payload: axios.get(`${ORIGIN}/answers/${str}`)
  }
};
