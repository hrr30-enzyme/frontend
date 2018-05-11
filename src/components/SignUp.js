import styled from "styled-components";

import React from "react";

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
`;
const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem 1.5rem;
  width: 24rem;
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
  /* Adapt the colours based on primary prop */
  background: red;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

/* const handleClick = (e, cb) => {
  console.log(props);
  console.log(username)
  //You need to figure out how you want to access username, password, and email
  e.preventDefault();
  cb();
}; */

const SignUp = (props) => {
  console.log(props)
  return (
    <Modal>
      <ModalContent>
        <Input placeholder="Email" type="text" />
        <Input placeholder="Username" type="text" />
        <Input placeholder="Password" type="text" />
        <Button /* onClick={e => handleClick(e, signUp)} */>Submit</Button>
      </ModalContent>
    </Modal>
  );
};

export default SignUp