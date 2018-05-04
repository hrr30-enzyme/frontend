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
      <textarea />
      <button>Submit</button>
    </Div>
  );
};

export default GiveAnswer