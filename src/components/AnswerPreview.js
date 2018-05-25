import React from "react";
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
  grid-template-rows: auto;
  grid-template-columns: 20% 10% auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 1em;
  text-decoration: none;
`;
const Stats = styled.div`
  display: grid;
  grid-template-columns: 40px 50px 50px;
  grid-row: 1 / span 2;
  grid-column: 1;
  grid-column-gap: 5px;
  align-self: center;
  justify-self: center;
  margin-left: 1em;
`;
const Votes = styled.div`
  display: inline-block;
  grid-column: 1;
  font-size: 14px;
`;
const Views = styled.div`
  display: inline-block;
  grid-column: 3;
  font-size: 14px;
`;
const Inner = styled.div`
  font-size: 22px;
  font-weight: 300;
  color: #6a737c;
  margin-top: 10px;
  display: block;
  text-align: center;
`;
const MiniCount = styled.div`
  padding: 8px 5px;
  line-height: 1;
`; 
const Title = styled.div`
  grid-row: 1 / span 2;
  grid-column: 3;
  font-size: 18px;
  align-self: center;
  text-decoration: none;
`
const User = styled.div`
  grid-row: 1;
  grid-column: 4;
  font-size: 18px;
  text-decoration: none;
  justify-self: right;
  padding: 10px;
`
