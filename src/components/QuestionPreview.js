import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

const Question = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 20% 10% auto auto;
  grid-column-gap: 35px;
  grid-row-gap: 1em;
  text-decoration: none;
  width: auto;
  height: auto;
  margin: 2px 2px;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: 40px 50px 50px;
  grid-row: 1 / span 2;
  grid-column: 1;
  grid-column-gap: 5px;
  justify-self: left;
  margin-bottom: 10px;
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
`

const Reward = styled.div`
  grid-row: 2;
  grid-column: 2;
  border: solid 2px #A50104;
  margin-bottom: 10px;
  justify-self: left;  
`

const Title = styled.div`
  grid-row: 1;
  grid-column: 3;
  font-size: 24px;
  text-decoration: none;
`

const User = styled.div`
  grid-row: 1;
  grid-column: 4;
  font-size: 18px;
  text-decoration: none;
  justify-self: left;
`

const Tags = styled.div`
  grid-row: 2;
  grid-column: 3;
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: 5px;
  margin-bottom: 10px;
`

const Tag1 = styled.div`
  grid-column: 1;
  border: solid 2px yellow;
  border-radius: 4px;
`

const Tag2 = styled.div`
  grid-column: 2;
  border: solid 2px #FCBA04;
  border-radius: 4px;  
`

const Tag3 = styled.div`
  grid-column: 3;
  border: solid 2px #A50104;
  border-radius: 4px;  
`

const Tag4 = styled.div`
  grid-column: 4;
  border: solid 2px #590004;
  border-radius: 4px;  
`

const Tag5 = styled.div`
  grid-column: 5;
  border: solid 2px #250001;
  border-radius: 4px;  
`

const Tag6 = styled.div`
  grid-column: 6;
  border: solid 2px #000000;
  border-radius: 4px;  
`

const handleClick = (e, callback, cb, id) => {
  e.preventDefault();

  callback(id);
  cb(`/question/${id}`);
};


const QuestionPreview = (props) => {
  console.log('QuestionPreview: ' + props);
  return (
    <Link to={`/question/${props.id}`} style={{textDecoration: 'none'}}>
      <Question >
      <Stats>
        <MiniCount>
          <Votes>
            <Inner>
              <div display="block">{props.upvoteCount}</div>
            </Inner>{" "}
            votes
          </Votes>
        </MiniCount>
        <MiniCount>
          <Answers>
            <Inner>
              {props.answerCount}
            </Inner>
            answers
          </Answers>
        </MiniCount>
        <MiniCount>
          <Views>
            <Inner>
              <div display="block">{props.viewCount}</div>
            </Inner>{" "}
            views
          </Views>
        </MiniCount>
      </Stats>
      <Bounty>
        Bounty
      </Bounty>
      <Reward>
        100 ETH
      </Reward>
      <Title>
        {props.title}
      </Title>
      <User>
        User
      </User>
      <Tags>
        <Tag1>TAG1</Tag1>
        <Tag2>TAG2</Tag2>
        <Tag3>TAG3</Tag3>
        <Tag4>TAG4</Tag4> 
        <Tag5>TAG5</Tag5>
        <Tag6>TAG6</Tag6>       
      </Tags>
    </Question>
    </Link>
  );
};

export default QuestionPreview;
