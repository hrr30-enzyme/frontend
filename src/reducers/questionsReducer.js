import { SUBMIT_QUESTION_FAILED, SUBMIT_QUESTION_SUCCESSFUL } from '../actions/types'

const initialState = {
    questions: [],
    loadingQuestion: false
}

export function questions (state = intialState, action) {
    switch (action.type) {
        
        case `${SUBMIT_QUESTION_SUCCESSFUL}`:
            return {
                questions: action.questions,
                loadingQuestion: false
            }
        
        case `${SUBMIT_QUESTION_FAILED}`:
            return {
                ...state, 
                loadingQuestion: false
            }
    }
}