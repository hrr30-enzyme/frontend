import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import Navbar from "../components/Navbar";
import * as styles from "../components/StyledComponents";
import QuestionPreview from "../components/QuestionPreview";
import AnswerPreview from "../components/AnswerPreview";
import CommentPreview from "../components/CommentPreview";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 5% auto auto 5%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 25px;

  .question {
    border: 3px solid ${styles.SECONDARY_COLOR};
    border-radius: 8px;
    box-shadow: 0 2px 3px 0 ${styles.MAIN_COLOR},
      0 2px 5px 0 ${styles.MAIN_COLOR};
    grid-column: 2 / 5;
    min-width: 800px;
    max-width: 800px;
    background-color: aliceblue;
    justify-self: center;
  }

  .answer {
    border: 3px solid violet;
    border-radius: 8px;
    min-width: 800px;
    max-width: 800px;
    box-shadow: 0 2px 3px 0 ${styles.MAIN_COLOR},
      0 2px 5px 0 ${styles.MAIN_COLOR};
    grid-column: 2 / 5;
    background-color: lavender;
    justify-self: center;
  }

  > .nav {
    grid-row: 1;
    grid-column: 1 / -1;
  }
`;

const Questions = styled.div`
  margin: 1em;
  font-size: 30px;
  grid-column: 1 / 5;
  justify-self: center;
  font-weight: bold;
  color: navy;
  height: 40px;
`;

const Answers = styled.div`
  margin: 1em;
  font-size: 30px;
  grid-column: 1 / 5;
  justify-self: center;
  font-weight: bold;
  color: indigo;
  height: 40px;
`;

const Info = styled.div`
  grid-column: 1 / 5;
  margin-bottom: 10em;
  justify-self: center;
  min-height: 100px;
  font-size: 30px;
  text-align: center;
`

class UserPage extends Component {
  componentDidMount() {
    this.props.getPostByQuery({
      UserId: this.props.authentication.userInfo.id,
      include: 'all'
    });
  }

  render() {

    return (
      <Layout>
        <div className="nav">
          <Navbar {...this.props} />
        </div>

          {/* Username: {this.props.authentication.userInfo.username}
  
          Email: {this.props.authentication.userInfo.email}

          Joined:

          {moment(this.props.authentication.userInfo.createdAt).format(
            "MMM Do YYYY"
          )}          */}

        <Questions>
          Questions: 
        </Questions>
            {
              this.props.post.questions.map(post => {
                if (post.PostTypeId === 1 && post.User.username === this.props.authentication.userInfo.username) {
                  return (           
                    <div className="question">
                      <QuestionPreview
                        qid={post.id}
                        question={post}
                        style={{ textDecoration: "none" }}
                        {...this.props}
                      />
                    </div>
                  )
                }
              })
            }
        <Answers>
          Answers:
        </Answers>
            {
              this.props.post.questions.map(post => {
                if (post.PostTypeId === 2 && post.User.username === this.props.authentication.userInfo.username) {
                  return (           
                    <div className="answer">
                      <AnswerPreview
                        qid={post.id}
                        answer={post}
                        style={{ textDecoration: "none" }}
                        {...this.props}
                      />
                    </div>
                  )
                }
              })
            }
            <Info></Info>
      </Layout>
    );
  }
}

export default UserPage;
