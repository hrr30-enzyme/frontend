import React from 'react'
import styled from 'styled-components'


const Layout = styled.div`
  grid-column: 2;
  min-width: 650px;
  display: grid;
  padding-left: 2em;
  grid-template-rows: auto;
  grid-template-columns: 10% 80% auto;
`
const Username = styled.h4`
  grid-row: 1;
  grid-column: 3;
  justify-self: right;
  padding: 1em;
`
const Actions = styled.div`
  grid-row: 2;
  grid-column: 1;
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 15px;
  font-size: 28px;
`
const Upvote = styled.div`
  grid-row: 1;
  justify-self: center;
  cursor: pointer;  
  
`
const VoteCount = styled.div`
  grid-row: 2;
  justify-self: center;
`
const Downvote = styled.div`
  grid-row: 3;
  justify-self: center;
  cursor: pointer;  
  
`
const Check = styled.div`
  grid-row: 4;
  justify-self: center;
  font-size: 40px;
  color: grey;
`
const Body = styled.p`
  grid-row: 2;
  grid-column: 2 / span 3;
  background-color: oldlace;
  border: 2px solid grey;
  font-size: 20px;
`

const Answer = (props) => {
  const answer = props.answer
  const id = answer && answer.id
  
  console.log('Answer component: ', answer)
  return (
    <Layout>
      <Username>{ answer === typeof Object && answer.User.username }</Username>
      <Actions>
        <Upvote onClick={() => props.updateAnswerVote(id, {type: 'up'})}>▲</Upvote>
        <VoteCount>{answer && answer.upvoteCount}</VoteCount>
        <Downvote onClick={() => props.updateAnswerVote(id, {type: 'down'})}>▼</Downvote>
        <Check>✓</Check>
      </Actions>
      <Body>{ answer && answer.body }</Body>
    </Layout>
  );
};


export default Answer
