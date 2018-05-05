import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  padding: 1em;
  display: grid;
  grid-template-rows: 2em 2em 11em 2em;
`
const Ask = (props) => {

  return (
    <Div>
      <div>Ask your own...</div>
      <textarea placeholder="Enter question title..." />
      <textarea placeholder="Enter question body here..." />
      <button>Submit</button>
    </Div>
  );
};

export default Ask