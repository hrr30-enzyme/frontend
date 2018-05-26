import React from "react";
import * as styles from "../components/StyledComponents";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AnswerPreview = ({answer}) => {
  console.log(answer)
  const username = answer.User ? answer.User.username : 'fake';
  return (
    <Link to={`/question/${answer.PostId}`} className='answerlink'>
      <Answer>
        <Stats>
          <MiniCount>
            <Votes>
              <Inner>
                <div display="block">{answer.upvoteCount}</div>
              </Inner>{" "}
              votes
            </Votes>
          </MiniCount>
          <MiniCount>
            <Views>
              <Inner>
                <div display="block">{answer.viewCount}</div>
              </Inner>{" "}
              views
            </Views>
          </MiniCount>
        </Stats>
        <User>
          {username}
        </User>
        <Title>Answer to Post: {answer.PostId}</Title>
      </Answer>
    </Link>
  );
};

export default AnswerPreview;

const Answer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 1fr;
  grid-column-gap: 20px;
  background-color: lavender;
  border-radius: 8px; 
  &:hover {
      background-color: rgb(228, 245, 255);
  }
`
const Title = styled.div`
  grid-row: 1 / span 2;
  grid-column: 3;
  font-size: 20px;
  align-self: center;
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
const User = styled.div`
  grid-row: 1;
  grid-column: 4;
  font-size: 14px;
  justify-self: right;
  padding-right: 1em;
  padding-top: 1em;
  font-weight: bold;
`
