import React from 'react'
import styled from 'styled-components'
import * as styles from "../components/StyledComponents"
import store from '../store'

const Answer = (props) => {
  const answer = props.answer
  console.log('Answer component: ', answer)
  return (
    <Layout>
      <Username>{ answer.User && answer.User.username }</Username>
      <Actions>
        <Upvote onClick={
          () => {
            store.dispatch({type: 'UPVOTE_WEB3', payload: answer.id})
            props.updateAnswerVote({id: answer.id, UserId: props.authentication.userInfo.id}, answer.id)       
          }
        }>▲</Upvote>
        <VoteCount>{answer && answer.upvoteCount}</VoteCount>
        <Downvote onClick={() => props.downvoteAnswerVote({id: answer.id, UserId: props.authentication.userInfo.id}, answer.id)}>▼</Downvote>
        <Check>✓</Check>
      </Actions>
      <Body>{ answer && answer.body }</Body>
    </Layout>
  )
}

export default Answer

const Layout = styled.div`
  grid-column: 2 / 4;
  min-width: 400px;
  display: grid;
  padding-left: 2em;
  grid-template-rows: auto;
  grid-template-columns: 10% 80% auto;
`
const Username = styled.h3`
  grid-row: 1;
  grid-column: 3;
  justify-self: right;
`
const Actions = styled.div`
  grid-row: 2;
  grid-column: 1;
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 15px;
  font-size: 28px;
  max-height: 100px;
  margin-top: 1em;
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
  color: ${styles.MAIN_COLOR};
`
const Body = styled.p`
  grid-row: 2;
  grid-column: 2 / 4;
  border: 2px solid ${styles.MAIN_COLOR};
  font-size: 20px;
  min-height: 250px;
  white-space: pre-wrap;
  padding: 25px;
`
