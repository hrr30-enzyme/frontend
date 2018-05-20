import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 2em auto;
  padding: 1em;

  > .usertag {
    background-color: white;
    grid-column: 1/3;
  }
`;

const UserTag = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const Answer = ({ 
  PostId, 
  PostTypeId, 
  UserId,
  answerCount,
  body,
  closedDate,
  commentCount,
  createdAt,
  favoriteCount,
  id,
  isTopAnswer,
  title,
  updatedAt,
  upvoteCount,
  viewCount,
}) => {
  return (
    <Div>
      <div className="usertag">
        <UserTag>
          <div>{UserId} TODO make this Username</div>
          <div>User description TODO</div>
        </UserTag>
      </div>
      <p>
        { body }
      </p>
    </Div>
  );
};

export default Answer;
