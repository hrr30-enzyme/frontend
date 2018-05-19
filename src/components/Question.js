import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1 auto;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  padding: 1em;

  > .title {
    font-weight: bold;
    font-size: 1.6em;
  }

  > .username {
    font-weight: bold;
    font-size: 1.5em;
    text-align: right;
  }

  > p {
    grid-column: 1/3;
  }
`;

const  Question = ({ question }) => {
  
  console.log('Question component: ', question)
  return (
    <Div>
      <div className="title">{ question && question.title }</div>
      <div className="username">{ question && question.UserId }</div>
      <p>{ question && question.body }</p> 
    </Div>
  );
};


export default Question