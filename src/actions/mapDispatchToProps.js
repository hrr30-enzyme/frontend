import { bindActionCreators } from 'redux'
import { signIn, signOut } from './authentication'
import { submitQuestion } from './submitQuestion'
import axios from 'axios'

const mapDispatchToProps = (dispatch) => (
  signIn,
  signOut,
  submitQuestion
); 

export default mapDispatchToProps