import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import * as styles from "../components/StyledComponents";
import Navbar from "../components/Navbar";
import QuestionPreview from "../components/QuestionPreview";
import AskQuestion from "../components/AskQuestion";
import { Link } from "react-router-dom";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 5% auto auto 5%;
  grid-column-gap: 30px;
  grid-row-gap: 15px;

  .question {
    border: 2px solid ${styles.SECONDARY_COLOR};
    box-shadow: 0 2px 3px 0 ${styles.MAIN_COLOR},
      0 2px 5px 0 ${styles.MAIN_COLOR};
    grid-column: 2;
    min-width: 650px;
    max-width: 1200px;
    margin-right: 2em;
    max-height: 82px;
  }

  .nav {
    grid-row: 1;
    grid-column: 1 / -1;
  }
`;

const Sidebar = styled.div`
  display: ${props => (props.show ? "grid" : "none")};
  justify-self: center;
  grid-column: 3;
  grid-row: 4 / 20;
  grid-template-rows: 10% auto auto auto auto;
  grid-template-columns: 1;
  grid-row-gap: 20px;
  min-width: 250px;
  max-width: 250px;
  font-family: Arial, Helvetica, sans-serif;
`;

const UserTitle = styled.h3`
  grid-row: 1;
  color: ${styles.LINK_COLOR};
  justify-self: center;
`;

const UserStats = styled.div`
  grid-row: 2;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #ffeec2;
  border-color: #f2f2f2;
  display: grid;
  min-height: 145px;
  max-width: 300px;
  grid-template-columns: auto auto auto;
  grid-template-rows: 70% 30%;
  color: ${styles.GRAY_2};

  .title {
    grid-row: 2;
    grid-column: 1/4;
    border-bottom-style: inset;
    border-bottom-color: lightgray;
    border-bottom-width: 1px;
    text-align: center;
    background: white;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  .answers {
    grid-row: 1;
    grid-column: 1/2;
    align-self: stretch;
    display: grid;
    text-align: center;
    grid-template-rows: 70% 30%;
    padding: 5px;
    align-self: stretch;
    &:hover {
      background: #ffe398;
    }
  }

  .questions {
    grid-row: 1;
    grid-column: 2/3;
    align-self: stretch;
    display: grid;
    grid-template-rows: 70% 30%;
    padding: 5px;
    text-align: center;
    &:hover {
      background: #ffe398;
    }
  }

  .comments {
    grid-row: 1;
    grid-column: 3/4;
    align-self: stretch;
    display: grid;
    text-align: center;
    grid-template-rows: 70% 30%;
    padding: 5px;
    &:hover {
      background: #ffe398;
    }
  }

  .number {
    text-align: center;
    font-size: 150%;
    padding: 2px;
    grid-row: 1;
    align-self: center;
  }
`;
const UserQuestions = styled.div`
  grid-row: 3;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #c6cbf9;
  border-color: #f2f2f2;
  display: grid;
  max-width: 350px;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto 50px;
  color: ${styles.GRAY_2};

  .title {
    grid-row: 2;
    grid-column: 1/4;
    border-bottom-style: inset;
    border-bottom-color: lightgray;
    border-bottom-width: 1px;
    text-align: left;
    background: white;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  .questions {
    grid-row: 1;
    gridcolumn: 1/4;
    justifygn-self: stretch;
    display: grid;
    grid-template-rows: auto auto auto;

    .item {
      grid-row: span 1;
      border-bottom: 1px solid darkgray;
      text-align: left;
      padding: 15px;
      align-self: stretch;
      justify-self: stretch;
      &:hover {
        background: #a4adf9;
      }

      .qtitle {
        color: white;
        padding: 5px;
        text-shadow: 1px 1px 4px rgba(150, 150, 150, 1);
      }

      .qBody {
        padding: 5px;
        max-width: 300px;
        white-space: pre-wrap;
      }
    }
  }
`;

const UserAnswers = styled.div`
  grid-row: 4;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #92cdec;
  border-color: #f2f2f2;
  display: grid;
  max-width: 350px;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto 50px;
  color: ${styles.GRAY_2};

  .title {
    grid-row: 2;
    grid-column: 1/4;
    border-bottom-style: inset;
    border-bottom-color: lightgray;
    border-bottom-width: 1px;
    text-align: left;
    background: white;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  .answers {
    grid-row: 1;
    gridcolumn: 1/4;
    justifygn-self: stretch;
    display: grid;
    grid-template-rows: auto auto auto;

    .item {
      grid-row: span 1;
      border-bottom: 1px solid darkgray;
      text-align: left;
      padding: 15px;
      align-self: stretch;
      justify-self: stretch;
      &:hover {
        background: #67b2da;
      }

      .user {
        color: white;
        padding: 5px;
        text-shadow: 1px 1px 4px rgba(150, 150, 150, 1);
      }

      .aBody {
        padding: 5px;
        max-width: 300px;
        white-space: pre-wrap;
      }
    }
  }
`;

const Button = styled.button`
  grid-column: 3;
  grid-row: 2;
  background: linear-gradient(to bottom, ${"white"}, lightsteelblue);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background: rgb(233, 243, 248);
    border: 2px solid ${styles.MAIN_COLOR};
  }
  font-size: 1em;
  font-weight: bold;
  margin-right: 2em;
  padding: 1em 1em;
  border: 2px solid ${styles.SECONDARY_COLOR};
  border-radius: 3px;
  justify-self: right;
  align-self: center;
  height: 80px;
  min-width: 200px;
`;
const Heading = styled.div`
  display: grid;
  grid-template-columns: 20% 15% auto;
  grid-template-rows: auto 20%;
  grid-row: 2;
  grid-column: 2 / 3;
  font-size: 16px;
  align-self: center;
`;
const Divider = styled.div`
  grid-column: 1 / 5;
  border-bottom: 2px solid ${styles.MAIN_COLOR};
  margin-left: 1.5em;
  margin-right: 1.5em;
`;
const Preview = styled.h1`
  grid-column: 1;
  margin-left: 1em;
  margin-top: 1em;
  font-size: 30px;
  min-width: 200px;
  color: midnightblue;
`;
const Tag2 = styled.h3`
  grid-column: 3;
  color: ${styles.MAIN_COLOR};
  background: white;
  &:hover {
    color: ${styles.LINK_COLOR};
    background: linear-gradient(to bottom, ${"white"}, rgb(233, 243, 248));
  }
  border: 1px solid black;
  border-top: 1px solid white;
  border-left: 1px solid white;
  padding: 1em;
  text-align: center;
  cursor: pointer;
`;
const Tag3 = styled.h3`
  grid-column: 4;
  color: ${styles.MAIN_COLOR};
  background: white;
  &:hover {
    color: ${styles.LINK_COLOR};
    background: linear-gradient(to bottom, ${"white"}, rgb(233, 243, 248));
  }
  padding: 1em;
  text-align: center;
  border: 1px solid black;
  border-top: 1px solid white;
  cursor: pointer;
`;
const Tag4 = styled.h3`
  grid-column: 5;
  color: ${styles.MAIN_COLOR};
  background: white;
  &:hover {
    color: ${styles.LINK_COLOR};
    background: linear-gradient(to bottom, ${"white"}, rgb(233, 243, 248));
  }
  padding: 1em;
  text-align: center;
  border: 1px solid black;
  border-top: 1px solid white;
  cursor: pointer;
`;
const Tag5 = styled.h3`
  grid-column: 6;
  color: ${styles.MAIN_COLOR};
  background: white;
  &:hover {
    color: ${styles.LINK_COLOR};
    background: linear-gradient(to bottom, ${"white"}, rgb(233, 243, 248));
  }
  padding: 1em;
  text-align: center;
  border: 1px solid black;
  border-top: 1px solid white;
  border-right: 1px solid white;
  cursor: pointer;
`;

export default class QuestionsPage extends Component {
  componentDidMount() {
    this.props.getPostByQuery({ postTypeId: 1, sortBy: "-createdAt" });
  }

  render() {
    console.log("questionsPage", this.props);
    console.log(this.props.post.questions);
    return (
      <Layout>
        <div className="nav">
          <Navbar {...this.props} />
        </div>
        <Heading>
          <Preview>{this.props.post.sortedBy}</Preview>
          <Tag2
            onClick={() => {
              this.props.changeSortedBy("Newest");
              this.props.getPostByQuery({
                sortBy: "-createdAt",
                PostTypeId: 1
              });
            }}
          >
            Newest
          </Tag2>
          <Tag3
            onClick={() => {
              this.props.changeSortedBy("Popular");
              this.props.getPostByQuery({
                sortBy: "-viewCount",
                PostTypeId: 1
              });
            }}
          >
            Popular
          </Tag3>
          <Tag4
            onClick={() => {
              this.props.changeSortedBy("Bounty");
              this.props.getPostByQuery({
                sortBy: "-bounty",
                PostTypeId: 1
              });
            }}
          >
            Bounty
          </Tag4>
          <Tag5
            onClick={() => {
              this.props.getRecomendations();
            }}
          >
            Recomended
          </Tag5>
        </Heading>
        <Divider />
        <Button onClick={() => this.props.openModal("ask")}>
          Ask a Question
        </Button>
        <Sidebar show={this.props.authentication.signedIn}>
          <UserTitle>
            {`Welcome back, ${this.props.authentication.userInfo.username}!`}
          </UserTitle>
          <UserStats>
            <div className="title">Your Stats</div>
            <div className="answers">
              <div className="number">5</div>answers
            </div>
            <div className="questions">
              <div className="number">10</div>
              <div>questions</div>
            </div>
            <div className="comments">
              <div className="number">20</div>comments
            </div>
          </UserStats>
          <UserQuestions>
            <div className="title">Latest questions</div>
            <div className="questions">
              <div className="item">
                <Link to={`/question/18`} style={{ textDecoration: "none" }}>
                  <div className="qtitle">
                    {"Making object face another with rotation"}
                  </div>
                </Link>
                <div className="qBody">
                  {
                    "  I'm trying to make my spotlight face its target when I translate it. I've tried glm::lookAt() with limited success. Lets say the light is at (0, 16, 0) and facing the origin. I've read that I need to translate the light to the origin, apply the rotation, then translate it back to its original position. How do I implement this? I have glm::lookAt(-lightPos, glm::vec3(0.f), upVector) but this gives me the light off to the side. This gives me the rotation matrix."
                  }
                </div>
              </div>
              <div className="item">
                <Link to={`/question/107`} style={{ textDecoration: "none" }}>
                  <div className="qtitle">
                    {"How to re-run process python in Windows/Linux?"}
                  </div>
                </Link>
                <div className="qBody">
                  {
                    "I run Python script on Windows using IDE PyCharm. Sometimes process is stopped. How can I configure that process will be re-run automatically after interruption?"
                  }
                </div>
              </div>
              <div className="item">
                <Link to={`/question/37`} style={{ textDecoration: "none" }}>
                  <div className="qtitle">
                    {"JavaScript opening local files not working"}
                  </div>
                </Link>
                <div className="qBody">
                  {
                    "I'm trying to load a 3D model into Three.js with JSONLoader, and that 3D model is in the same directory as the entire website. I'm getting the \"Cross origin requests are only supported for HTTP.\" error, but I don't know what's causing it nor how to fix it."
                  }
                </div>
              </div>
            </div>
          </UserQuestions>
          <UserAnswers>
            <div className="title">Latest answers</div>
            <div className="answers">
              <div className="item">
                <div className="user">MeowMafioso</div>
                <div className="aBody">
                  {
                    "category is object which has property name (and other properties){% if category.name == 'Events' %} "
                  }
                </div>
              </div>
              <div className="item">
                <div className="user">LegendaryLeo</div>
                <div className="aBody">
                  You're trying to call the isEmpty()
                  method on a null reference (as List test = null; ). This will
                  surely throw a NullPointerException. You should do
                  if(test!=null) instead (Checking for null first). The method
                  isEmpty() returns true, if an ArrayList object contains no
                  elements; false otherwise (for that the List must first be
                  instantiated that is in your case is null).
                </div>
              </div>
              <div className="item">
                <div className="user">Codybot</div>
                <div className="aBody">
                  {
                    "I use pdoResources (which similar to getResources, but faster). Place this code in instead <!-- I need to add sibling info here --> and this is would help. [[pdoResources? &parents=`[[+id]]` &depth=`1` &tpl=`your_sibling_row_tpl` ]]"
                  }
                </div>
              </div>
            </div>
          </UserAnswers>
        </Sidebar>
        <AskQuestion
          {...this.props}
          title={this.props.textInput.title}
          body={this.props.textInput.body}
          showModal={(() => {
            console.log("this.props.showMOda.ask", this.props.showModal.ask);
            return this.props.showModal.ask;
          })()}
          closeModal={this.props.closeModal}
          userInfo={this.props.authentication.userInfo}
          authentication={this.props.authentication}
          addText={this.props.addText}
          postQuestion={this.props.postQuestion}
        />
        {this.props.post.questions.map(question => (
          <div className="question">
            <QuestionPreview
              qid={question.id}
              question={question}
              style={{ textDecoration: "none" }}
              {...this.props}
            />
          </div>
        ))}
      </Layout>
    );
  }
}
