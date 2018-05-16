import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

const Question = styled.div`
  display: block
  padding: 12px;
  border-bottom: 1px solid #e4e6e8;
  width: 728px;
`;

const Stats = styled.div`
  float: left;
  vertical-align: top;
  margin-right: 50px;
  cursor: pointer;
`;
const Votes = styled.div`
  display: inline-block;
  height: 38px;
  min-width: 38px;
  margin: 0 3px 0 0;
  font-size: 11px;
  color: #848d95;
`;

const Answers = styled.div`
  display: inline-block;
  margin: 0 3px 0 0;
  min-width: 44px;
  height: auto;
  font-size: 11px;
`;

const Views = styled.div`
  display: inline-block;
  height: 38px;
  min-width: 40px;
  margin: 0 7px 0 0;
  font-size: 11px;
  color: #848d95;
`;

const Inner = styled.div`
  font-size: 17px;
  font-weight: 300;
  color: #6a737c;
  margin-bottom: 2px
  display: block
`;
const MiniCount = styled.div`
  padding: 8px 5px;
  line-height: 1;
`; 

const handleClick = (e, callback, cb, id) => {
  e.preventDefault();

  callback(id);
  cb(`/question/${id}`);
};

const QuestionPreview = ({ ...props }) => {
  console.log('QuestionPreview: ' + props.title);
  return (
    <Question onClick={e => handleClick(e, props.history.push, props.qid)}>
      <Link to="/question" />
      <Stats>
        <MiniCount>
          <Votes>
            <Inner>
              <div display="block">1</div>
            </Inner>{" "}
            vote
          </Votes>
        </MiniCount>
        <MiniCount>
          <Answers>
            <Inner>
              <div display="block">2</div>
            </Inner>{" "}
            answers
          </Answers>
        </MiniCount>
        <MiniCount>
          <Views>
            <Inner>
              <div display="block">3</div>
            </Inner>{" "}
            views
          </Views>
        </MiniCount>
      </Stats>
      Title: {props.title}
      <br/>
      Body: {props.body}
    </Question>
  );
};

export default QuestionPreview;
