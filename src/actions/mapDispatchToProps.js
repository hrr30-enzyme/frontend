import { bindActionCreators } from 'redux'
import { signIn, signOut } from './authentication'
import { submitQuestion } from './submitQuestion'
import { addText } from './inputText'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ 
    signIn,
    signOut,
    submitQuestion,
    addText
  }, dispatch)
); 

export default mapDispatchToProps