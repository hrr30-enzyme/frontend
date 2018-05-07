import {GET_POSTS, SIGN_IN, SIGN_OUT} from './types'
import axios from 'axios'

export function getPosts(posts){
    dispatch({
      type: GET_POSTS,
      payload: posts
    })
}

export function signIn (userData){
  dispatch({
    type: SIGN_IN,
    payload: userData
  })
}

export function signOut (){
  dispatch({
    type: SIGN_OUT,
    payload: //TBD
  })
}
    