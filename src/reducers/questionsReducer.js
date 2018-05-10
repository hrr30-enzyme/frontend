import { SUBMIT_QUESTION_FAILED, SUBMIT_QUESTION_SUCCESSFUL } from '../actions/types'

const initialState = {
    questions: [],
    error: false
}

export default function questions (state = initialState, action) {
    switch (action.type) {
        
        case `${SUBMIT_QUESTION_SUCCESSFUL}`:
            return {
                questions: action.payload.questions,
                error: false
            }
        
        case `${SUBMIT_QUESTION_FAILED}`:
            return {
                ...state, 
                error: true
            }
        default:
        return state;
    }
}