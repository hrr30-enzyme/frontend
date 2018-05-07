import FETCH_POSTS from './types'
import axios from 'axios'

export const fetchPosts = () => dispatch => {
        axios.get('/questions')
        .then(function(posts){
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        })
}