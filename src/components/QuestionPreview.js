import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

const Question = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #e4e6e8;
  overflow: hidden;
  width: 728px;
`;

const qStats = styled.div`
  vertical-align: top;
  float: left;
  margin-right: 10px;
`;

const qSummary = styled.div`
  width: 530px;
  padding: 0;
  float: left;
`;
const qVotes = styled.div`
  padding: 8px 5px;
  line-height: 1;
`;
const qVoteCount = styled.div`
  margin-bottom: 2px;
`;
const qAnswers = styled.div`
  display: inline-block;
  margin: 0 3px 0 0;
  min-width: 44px;
  height: auto;
  font-size: 11px;
  padding: 6px;
`;

const qViews = styled.div`
  display: inline-block;
  height: 38px;
  min-width: 40px;
  margin: 0 7px 0 0;
  font-size: 11px;
  color: #848d95;
  padding: 5px 5px 6px;
`;
const qTitle = styled.h3`
  font-weight: 400;
`;

const QuestionPreview = props => {
  return (
    <Question>
      <Link to="/question">
        <qStats>
          <qVotes>
            <qVoteCount>5</qVoteCount>Votes
          </qVotes>
          <qAnswers> Answers</qAnswers>
          <qViews>6 Views</qViews>
        </qStats>
        <qSummary>
          <qTitle>Question title and such and such and such and such</qTitle>
        </qSummary>
      </Link>
    </Question>
  );
};

export default QuestionPreview;
