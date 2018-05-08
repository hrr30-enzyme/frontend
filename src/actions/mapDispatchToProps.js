import { bindActionCreators } from 'redux'
import { signIn } from './signIn'
import axios from 'axios'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    signIn: signIn
  }, dispatch)
); 

export default mapDispatchToProps