import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import * as styles from "../components/StyledComponents";

const Layout = styled.div`
  grid-column: 2 / 4;
  grid-row: 2;
  min-width: 400px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 10% 70% auto;
`
const Stats = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: grid;
  grid-template-columns: 100px 200px;
  justify-self: center;
`
const Stat = styled.p`
  color: grey;
  grid-column: 1;
`
const Value = styled.p`
  color: black;
  grid-column: 2;
`
const Title = styled.h2`
  grid-row: 2;
  grid-column: 1 / 4;
  border-bottom: solid lightgrey 1px;
  margin-bottom: 1em;
  color: 
`
const Username = styled.h3`
  grid-row: 2;
  grid-column: 3;
  justify-self: right;
  padding: 1em;
`
const Actions = styled.div`
  grid-row: 3;
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
const Star = styled.div`
  grid-row: 4;
  justify-self: center;
  font-size: 40px;
  cursor: pointer;  
  color: ${styles.MAIN_COLOR};
`
const Body = styled.p`
  grid-row: 3;
  grid-column: 2 / 4;
  background-color: ivory;
  border: 2px solid ${styles.MAIN_COLOR};
  font-size: 20px;
`

const  Question = (props) => {
  const question = props.question
  console.log('Question component: ', question, props)
  return (
    <Layout>
      <Stats>
        <Stat>Asked</Stat><Value>{question && moment(question.createdAt).from()}</Value>
        <Stat>Views</Stat><Value>{question && question.viewCount}</Value>
        <Stat>Active</Stat><Value>{question && moment(question.updatedAt).from()}</Value>
      </Stats>
      <Username>{ question.User && question.User.username }</Username>
      <Actions>
        <Upvote onClick={() => props.updateQuestionVote({id: question.id, UserId: props.authentication.userInfo.id})}>▲</Upvote>
        <VoteCount>{question && question.upvoteCount}</VoteCount>
        <Downvote onClick={() => {props.downvoteQuestionVote({id: question.id, UserId: props.authentication.userInfo.id})}}>▼</Downvote>
        <Star>★</Star>
      </Actions>
      <Title>{ question && question.title }</Title>
      <Body>{ question && question.body }</Body>
    </Layout>
  );
};


export default Question