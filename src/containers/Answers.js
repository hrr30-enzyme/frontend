import React from 'react'
import styled from 'styled-components'

import Answer from '../components/Answer'

const Div = styled.div`
  padding: 1em;
  display: grid;
  grid-row-gap: 1em;
  grid-template-columns: auto;
  > div {
    background-color: gray;
   }
`;

const Answers = ({ answers }) => {
  console.log('answers', answers)
  return (
    answers.length > 0 &&
        <Div>
          { answers.map(answer => <div><Answer {...answer} /></div>) }
        </Div>
  )
};

export default Answers