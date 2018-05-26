import React from 'react'
import styled from 'styled-components'
import modal from './Modal'
import * as styles from '../components/StyledComponents'

const Button = styles.Button

const InputTitle = styled.input`
  padding: 0.5em;
  margin: 1.5em;
  width: 85%;
  height: 30px;
  font-size: 16px;
  background: ghostwhite;
  border: 2px solid ${styles.MAIN_COLOR};
  border-radius: 3px;
`

const InputBody = styled.textarea`
  padding: 0.5em;
  margin: 1.5em;
  width: 85%;
  height: 200px;
  font-size: 16px;
  text-align: start;
  background: ghostwhite;
  border: 2px solid ${styles.MAIN_COLOR};
  border-radius: 3px;
`

const handleChange = (cb, inputType, input) => {
  cb(inputType, input)
}

const handleClick = (e, cb, question) => {
  e.preventDefault()
  cb(question)
}

const handleClose = (e, cb) => {
  e.preventDefault()
  cb("ask")
}

const Ask = ({
  title, 
  body, 
  addText, 
  authentication, 
  showModal, 
  closeModal,
  postQuestion,
  createQuestion,
  web3,
}) => {
  console.log('askquestion component', addText)
  const UserId = authentication.userInfo.id
  console.log(title, body)
  console.log('show moda', showModal)
  return modal ({
    showModal,
    handleClose: () => closeModal('ask')
   })(
   [
    <div className="modal-title">Ask your own...</div>,
    <InputTitle
        value={title}
        onChange={e => handleChange(addText, "title", e.target.value)}
        placeholder="Title"
        type="text"
        required
    />,
    <InputBody
        value={body}
        onChange={e => handleChange(addText, "body", e.target.value)}
        placeholder="Body"
        type="text"
        required
    />,
    <Button
      onClick={e => {
        handleClick(e, postQuestion, { title: title, body: body, UserId: UserId, PostTypeId: 1 })
      }}
    >
      Submit
    </Button>,
   ]);
};

export default Ask
