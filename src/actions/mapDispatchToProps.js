import { bindActionCreators } from 'redux'
import {getPosts, signIn, signOut} from './actions'
import axios from 'axios'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    // postQuestion: function(question){
    //   return function(dispatch) {
    //     return axios.post('/questions', question)
    //     .then((response) => {
    //       dispatch(getPosts(response))
    //     })
    //   }
    // },

    // postAnswer: function(answer){
    //   return function(dispatch) {
    //     return axios.post(/*answers route*/, answer)
    //     .then((response) => {
    //       dispatch(getPosts(response))
    //     })
    //   }
    // },

    // postComment: function(comment){
    //   return function(dispatch){
    //     return axios.post(/*comments route*/, comment)
    //     .then((response) => {
    //       dispatch(getPosts(response))
    //     })
    //   }
    // },

    // getPosts: function(){
    //   return function(dispatch){
    //     return axios.get(/*posts route*/)
    //     .then((response) => {
    //       dispatch(getPosts(response))
    //     })
    //   }
    // },

    signIn: function(credentials){
      return function(dispatch){
        return axios.post('user/sign-in', credentials)
        .then((response) => {
          dispatch(signIn(response))
        })
      }
    },

    signOut: function(credentials){
      return function(dispatch){
        return axios.post('user/sign-out', credentials)
        .then((response) => {
          dispatch(signOut(response))
        })
      }
    }
    
  }, dispatch)
); 

export default mapDispatchToProps