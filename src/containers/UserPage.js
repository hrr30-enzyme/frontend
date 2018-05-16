import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import Navbar from "../components/Navbar";
import QuestionsPreview from "../components/QuestionPreview";
import AnswerPreview from "../components/AnswerPreview";
import CommentPreview from "../components/CommentPreview";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: auto auto auto auto auto auto auto auto;
  grid-column-gap: 1em;
  grid-row-gap: 1em;

  > .nav {
    background-color: red;
    grid-column: 1/3;
  }
`;

class UserPage extends Component {
  componentDidMount() {
    this.props.queryPosts({ userId: this.props.authentication.userInfo.id });
  }

  render() {
    console.log('xxxxxxxxxxx----------USER PAGE: ', this.props)

    return (
      <Layout>
        <div className="nav">
          <Navbar {...this.props} />
        </div>
        <div>
          Username: {this.props.authentication.userInfo.username}
          <br />
          Email: {this.props.authentication.userInfo.email}
          <br />
          Joined:{" "}
          {moment(this.props.authentication.userInfo.createdAt).format(
            "MMM Do YYYY"
          )}
          <br />
          Questions:
          <br />
          {this.props.post.questions.map(post => {
            if (post.PostTypeId === 1) {
              return <QuestionsPreview question={post} />;
            }
          })}
          Answers:
          <br />
          {this.props.post.questions.map(post => {
            if (post.PostTypeId === 2) {
              return <AnswerPreview answer={post} />;
            }
          })}
          <br/>
          Comments:
          {this.props.post.questions.map(post => {
            if (post.PostTypeId === 3) {
              return <CommentPreview comment={post} />;
            }
          })}
        </div>
      </Layout>
    );
  }
}

export default UserPage;

// /* /*
//  * not case sensitive though
//  *
//  * Examples of how to use filter params:
//  *
//  *  http://catalyst/posts/?UserId=1&PostTypeId=5
//  *
//  * http://catalyst/posts/?isTopAnswer=true
//  *
//  */
// const camelCase = {
//   'id': 'id',
//   'postid': 'PostId',
//   'userid': 'UserId',
//   'title': 'title',
//   'posttypeid': 'PostTypeId',
//   'istopanswer': 'isTopAnswer',
//   'tagname': 'tagName',
//   'viewcount': 'viewCount',
//   'answercount': 'answerCount',
//   'favoritecount': 'favoriteCount',
//   'upvotecount': 'upvoteCount',
//   'createdat': 'createdAt',
//   'closeddate': 'closedDate',
//   'limitby': 'limitBy',
// };

// const filterParams = [
//   'id',
//   'PostId',
//   'UserId',
//   'title',
//   'PostTypeId',
//   'isTopAnswer',
//   'tagName',
// ];

// /*
//  * Examples of how to use sort params:
//  *
//  * sort by viewCount ascending
//  * http://catalyst/posts/?sortBy=+viewCount
//  *
//  * sort by createdAt descending
//  * http://catalyst/posts/?sortBy=-createdAt
//  *
//  */
// const sortParams = [
//   'viewCount',
//   'answerCount',
//   'favoriteCount',
//   'upvoteCount',
//   'createdAt',
//   'closedDate',
// ];

// /*
//  * Examples of how to use other params:
//  *
//  * get the top 50 upvoted posts
//  *
//  * http://catalyst/posts/?sortBy=-upVoteCount&limitBy=50
//  *
//  *
//  * limitBy defaults to 50.  It can be turned off with
//  *
//  * limitBy=all
//  *
//  */

// //const otherParams = [
// //  'limitBy',
// // ]; */
