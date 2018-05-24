import React from 'react'
import styled from 'styled-components'
import modal from './Modal'

const InputTitle = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 80%;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const InputBody = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 80%;
  height: 50%;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background: red;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const handleChange = (cb, inputType, input) => {
  cb(inputType, input);
};

const handleClick = (e, cb, question) => {
  e.preventDefault();
  cb(question);
};

const handleClose = (e, cb) => {
  e.preventDefault();
  cb("ask");
};

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
  console.log('askquestion component', addText);
  const UserId = authentication.userInfo.id
  console.log(title, body);
  console.log('show moda', showModal);
  return modal ({
    showModal,
    handleClose: () => closeModal('ask')
   })(
   [
    <div>Ask your own...</div>,
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
        console.log('\n\n\n', web3);
        const from = web3.web3.eth.getAccounts();
        console.log('from', from);
        createQuestion(200000000000000)
      }}
    >
      Submit
    </Button>,
   ]);
};

export default Ask
