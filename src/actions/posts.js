import axios from "axios";

import { 
  POST_QUESTION, 
  GET_QUESTION, 
  GET_QUESTIONS,
  POST_ANSWER,
  GET_ANSWER,
  GET_ANSWERS
} from './types'

import { ORIGIN } from '../constants'


const queryString = (params) => 
  Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&')


export const postQuestion = (question) => ({
  type: POST_QUESTION,
  payload: axios.post(`${ORIGIN}/question`, question)
});

export const getQuestion = (id) => ({
  type: GET_QUESTION,
  payload: axios.get(`${ORIGIN}/question/${id}`) 
});

export const getQuestions = (query) => {
  const str = queryString(query);
  return {
    type: GET_QUESTIONS,
    payload: axios.get(`${ORIGIN}/questions/${str}`)
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
