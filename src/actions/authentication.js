import axios from 'axios'

function sendSignIn(credentials){
    return axios.post('/user/sign-in', credentials)
}

function signedIn (userInfo){
    return {
        type: 'SIGN_IN_SUCCESSFUL',
        userInfo
    }
}

function doNotSignIn (error){
    return {
        type: 'SIGN_IN_FAILED',
        error
    }
}

export function signIn (credentials){
    return function(dispatch){
        return sendSignIn(credentials).then(
            userInfo => dispatch(signedIn(userInfo)),
            error => dispatch(doNotSignIn(error))
        );
    };
}

function sendSignOut(credentials){
    return axios.post('/user/sign-out', credentials)
}

function signedOut (status){
    type: 'SIGN_OUT_SUCCESSFUL',
    status
}

function doNotSignOut (error){
    type: 'SIGN_OUT_FAILED',
    error
}

export const signOut = function(credentials){
    return function(dispatch){
        return sendSignOut(credentials).then(
            status => dispatch(signedOut(status)),
            error => dispatch(doNotSignOut(error))
        );
    };
}