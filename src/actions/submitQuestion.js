import axios from "axios";

import { SUBMIT_QUESTION_SUCCESSFUL } from "./types";

import { SUBMIT_QUESTION_FAILED } from "./types";

function sendQuestion(question) {
  return axios.post("/question/", question);
}

function returnQuestions(questions) {
  return {
    type: SUBMIT_QUESTION_SUCCESSFUL,
    payload: {
      questions
    }
  };
}

function handleQuestionSubmitError(error) {
  return {
    type: SUBMIT_QUESTION_FAILED,
    payload: {
      error
    }
  };
}

export function submitQuestion(title, body, userId) {
  const question = {
    title,
    body,
    userId
  };

  return function(dispatch) {
    return sendQuestion(question).then(
      questions => dispatch(returnQuestions(questions)),
      error => dispatch(handleQuestionSubmitError(error))
    );
  };
}
