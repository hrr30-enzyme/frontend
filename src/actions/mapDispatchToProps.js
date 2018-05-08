import { bindActionCreators } from 'redux'
import { SIGN_IN } from './types'
import axios from 'axios'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    signIn: function(credentials){
      return {
        type: `${SIGN_IN}`,
        payload: axios.post('users/sign-in', credentials)
      }
    }
  }, dispatch)
); 

export default mapDispatchToProps