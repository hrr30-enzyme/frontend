import axios from 'axios'

export const signIn = (credentials) => ({
    type: 'SIGN_IN',
    payload: axios.post('users/sign-in', credentials)
})