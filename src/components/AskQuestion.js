import React from 'react'
import styled from 'styled-components'
import { postQuestion } from '../actions/posts';


const Modal = styled.div`
  display: ${props => (props.showModal.ask ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem 1.5rem;
  width: 40rem;
  height: 45rem;
  border-radius: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
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

const handleClick = (e, cb, data) => {
  e.preventDefault();
  cb(data);
};

const handleClose = (e, cb) => {
  e.preventDefault();
  cb("ask");
};

const Ask = ({title, body, addText, authentication, showModal, closeModal}) => {
  const userId = authentication.userInfo.id
  return (
    <Modal showModal={showModal}>
      <ModalContent>
        <div>Ask your own...</div>
        <Input
            value={title}
            onChange={e => handleChange(addText, "title", e.target.value)}
            placeholder="Title"
            type="text"
            required
        />
        <Input
            value={body}
            onChange={e => handleChange(addText, "body", e.target.value)}
            placeholder="Body"
            type="text"
            required
        />
        <Button
          onClick={e => handleClick(e, postQuestion, { title, body, userId})}
        >
          Submit
        </Button>
        <Button onClick={e => handleClose(e, closeModal)}>Close</Button>
      </ModalContent>
    </Modal>
  );
};

export default Ask