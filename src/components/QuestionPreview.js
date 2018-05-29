import React from "react"
import * as styles from "../components/StyledComponents"
import styled from "styled-components"
import { Link } from "react-router-dom"

const QuestionPreview = ({question}) => {

  const username = question.User ? question.User.username : 'fake'
  return (
    <Link to={`/question/${question.id}`} className='link'>
      <Question >
        <Stats>
          <MiniCount>
            <Votes>
              <Inner>
                {question.upvoteCount}
              </Inner>
              votes
            </Votes>
          </MiniCount>
          <MiniCount>
            <Answers>
              <Inner>
                {question.commentCount}
              </Inner>
              answers
            </Answers>
          </MiniCount>
          <MiniCount>
            <Views>
              <Inner>
                {question.viewCount}
              </Inner>
              views
            </Views>
          </MiniCount>
        </Stats>
        <Bounty>
          Bounty
        </Bounty>
        <Reward>
          {(Math.round(question.bounty * 100) / 100) || .1 } ETH
        </Reward>
        <Title>
          {question.title}
        </Title>
        <User>
          {username}
        </User>
      </Question>
    </Link>
  )
}

export default QuestionPreview

const Question = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 4fr 1fr;
  grid-column-gap: 20px;
  background-color: aliceblue;
  border-radius: 8px; 
  padding: 5px;
  &:hover {
      background-color: rgb(228, 245, 255);
  }
`
const Stats = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  grid-row: 1 / span 2;
  grid-column: 1;
  align-items: center;
  justify-items: center;
  margin-left: 0.2em;
  margin-right: 0.2em;
`
const Votes = styled.div`
  grid-column: 1;
  font-size: 14px;
  font-weight: bold;
`
const Answers = styled.div`
  grid-column: 2;
  font-size: 14px;
  font-weight: bold;
`
const Views = styled.div`
  grid-column: 3;
  font-size: 14px;
  font-weight: bold;
`
const Inner = styled.div`
  font-size: 18px;
  color: ${styles.DARK};
  text-align: center;
`
const MiniCount = styled.div`
`
const Bounty = styled.div`
  grid-row: 1;
  grid-column: 2;
  justify-self: center;
  align-self: center;
  font-weight: bold;
  font-size: 20px;
`
const Reward = styled.div`
  grid-row: 2;
  grid-column: 2;
  justify-self: center; 
  align-self: top;   
  font-size: 12px;
  padding-bottom: 0.5em;
  font-weight: bolder;
`
const Title = styled.div`
  grid-row: 1 / span 2;
  grid-column: 3;
  font-size: 20px;
  align-self: center;
  font-family: Arial Narrow, sans-serif;
`
const User = styled.div`
  grid-row: 1;
  grid-column: 4;
  font-size: 14px;
  justify-self: right;
  padding-right: 1em;
  padding-top: 1em;
  font-weight: bold;
`
