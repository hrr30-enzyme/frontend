import axios from 'axios'


function sendQuestion(question){
    return axios.post('/question/', question)
}

function returnQuestions (userInfo){
    return {
        type: 'SUBMIT_QUESTION_SUCCESSFUL',
        questions
    }
}

function handleQuestionSubmitError (error){
    return {
        type: 'SUBMIT_QUESTION_FAILED',
        error
    }
}

export function sendQuestion  (title, body, user) {

    question = {
        title, 
        body, 
        user
    }

    return function(dispatch){
        return sendQuestion(question).then(
            questions => dispatch(returnQuestions(questions)),
            error => dispatch(handleQuestionSubmitError(error))
        )
    }
}