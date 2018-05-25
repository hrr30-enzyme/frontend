import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

const Question = styled.div`
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

const Answers = styled.div`
  display: inline-block;
  grid-column: 2;
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

const Bounty = styled.div`
  grid-row: 1;
  grid-column: 2;
  justify-self: left;
  align-self: center;
  font-weight: bolder;
  font-size: 18px;
  font-style: italic;
  margin-top: 0.7em;
`

const Reward = styled.div`
  grid-row: 2;
  grid-column: 2;
  margin-bottom: 10px;
  justify-self: left;  
`

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

const Tags = styled.div`
  grid-row: 2;
  grid-column: 3;
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: 5px;
  margin-bottom: 10px;
`

const QuestionPreview = ({question}) => {

  const username = question.User ? question.User.username : 'fake';
  return (
    <Link to={`/question/${question.id}`} className='link'>
      <Question >
        <Stats>
          <MiniCount>
            <Votes>
              <Inner>
                <div display="block">{question.upvoteCount}</div>
              </Inner>{" "}
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
                <div display="block">{question.viewCount}</div>
              </Inner>{" "}
              views
            </Views>
          </MiniCount>
        </Stats>
        <Bounty>
          Bounty
        </Bounty>
        <Reward>
          {Math.round(question.bounty * 100) / 100} ETH
        </Reward>
        <Title>
          {question.title}
        </Title>
        <User>
          {username}
        </User>
        <Tags>
     
        </Tags>
      </Question>
    </Link>
  );
};

export default QuestionPreview;
