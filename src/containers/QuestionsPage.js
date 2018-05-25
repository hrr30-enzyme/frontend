import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import * as styles from "../components/StyledComponents";
import Navbar from "../components/Navbar";
import QuestionPreview from "../components/QuestionPreview";
import AskQuestion from "../components/AskQuestion";
import { Link } from "react-router-dom";

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
              console.log('isloggedin', this.props)
              if (this.props.authentication.signedIn === true) {
                this.props.getRecomendations();
                this.props.changeSortedBy('Recomended')
              }
            }}
          >
            Recomended
          </Tag5>
        </Heading>
        <Divider />
        <Div></Div>
        <Button onClick={() => this.props.openModal("ask")}>
          Ask a Question
        </Button>

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

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 30px;
  grid-row-gap: 10px;

  .question {
    border: 2px solid ${styles.SECONDARY_COLOR};
    border-radius: 5px;
    box-shadow: 0 2px 3px 0 ${styles.MAIN_COLOR},
      0 2px 5px 0 ${styles.MAIN_COLOR};
    grid-column: 2 / 4;
    background-color: aliceblue;
  }
  .nav {
    grid-row: 1;
    grid-column: 1 / -1;
  }
`;

const Div = styled.div`
  grid-column: 2;
  margin-top: 2em;
`
const Button = styled.button`
  grid-column: 3;
  grid-row: 2;
  cursor: pointer;
  background: linear-gradient(to bottom, ${"white"}, ${styles.LINK_COLOR});
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background: rgb(233, 243, 248);
    border: 2px solid ${styles.GRAY_2};
  }
  font-size: 1em;
  font-weight: bold;
  margin-right: 2em;
  padding: 1em 1em;
  border: 2px solid ${styles.GRAY_2};
  border-radius: 3px;
  justify-self: right;
  align-self: center;
  height: 75px;
  min-width: 180px;
`;
const Heading = styled.div`
  display: grid;
  grid-template-columns: 20% 15% auto;
  grid-template-rows: auto 20%;
  grid-row: 2;
  grid-column-gap: 3px;
  grid-column: 2 / 3;
  font-size: 16px;
  align-self: center;
  margin-right: 5em;
`;
const Divider = styled.div`
  grid-column: 1 / 5;
  border-bottom: 1px solid #dddddd;
  margin-left: 1.5em;
  margin-right: 1.5em;
  margin-bottom: 2em;
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
