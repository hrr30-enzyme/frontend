import React from 'react'
import styled from 'styled-components'
import { postQuestion } from '../actions/posts';

const Div = styled.div`
  padding: 1em;
  display: grid;
  grid-template-rows: 2em 2em 11em 4em;
`
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

const Ask = ({title, body, addText, authentication}) => {
  const userId = authentication.userInfo.id
  return (
    <Div>
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
    </Div>
  );
};

export default Ask