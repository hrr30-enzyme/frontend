import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: grid;
  grid-template-rows: 2em 7em;
  padding: 1em;
`;

const GiveAnswer = (props) => {

  return (
    <Div>
      <div>Answer below... </div>
      <textarea 
        value={ props.textInput.answerBody }
        onChange={ (e) => props.addText('answerBody', e.target.value, e) } 
      />
      <button
        onClick={ () => props.postAnswer({
          UserId: props.authentication.userInfo.id,
          body: props.textInput.answerBody,
          PostTypeId: 2,
          PostId: props.match.params.id,
        })}
      >
        Submit
      </button>
    </Div>
  );
};

export default GiveAnswer