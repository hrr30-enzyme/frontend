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
          <Button onClick={() => this.props.openModal("ask")}>
            Ask a Question
          </Button>
        </Heading>

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
  grid-auto-rows: minmax(40px, auto);
  grid-template-columns: 25% auto auto 10%;
  grid-column-gap: 5px;
  grid-row-gap: 10px;
  background-color: ${styles.SECONDARY_COLOR};

  .question {
    border: 2px solid ${styles.SKY_BLUE};
    border-radius: 10px;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.9);
    margin-right: 1em;
    grid-column: 2 / 5;
    &:hover {
      border: 2px solid ${styles.GREEN};
    }
  }
  .nav {
    grid-row: 1;
    grid-column: 1 / -1;
  }
`;

const Button = styled.button`
  grid-column: 6;
  color: ${styles.LANDING_BLUE};
  cursor: pointer;
  background: ivory;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2), 0 1px 2px 1px rgba(0, 0, 0, 0.25);
  &:hover {
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 3px solid ${styles.POOL};
  }
  font-size: 1.1em;
  font-weight: bold;
  margin: 1em;
  border: 3px solid ${styles.SKY_BLUE};
  border-radius: 10px;
  justify-self: center;
  align-self: center;
  min-height: 80px;
  min-width: 100px;
`;
const Heading = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr 1fr 1fr 1fr 1.2fr;
  grid-template-rows: auto;
  grid-row: 2;
  grid-column-gap: 10px;
  grid-column: 1 / 5;
  align-items: center;
  background-color: ${styles.NAVY};
  border: 1.2px solid ${styles.MAIN_FONT};
`;
const Preview = styled.h1`
  grid-column: 1;
  font-size: 32px;
  color: ${styles.MAIN_FONT};
  background-color: ${styles.DARK};
  border: 1.5px solid ${styles.LINK_COLOR};
  text-align: center;
  margin: 1em;
  padding: 0.5em;
`;
const Tag2 = styled.h3`
  grid-column: 2;
  color: white;
  background: rgb(126, 171, 255);
  &:hover {
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 2px solid ${styles.PURPLE};
  }
  padding: 1em;
  text-align: center;
  cursor: pointer;
`;
const Tag3 = styled.h3`
  grid-column: 3;
  color: white;
  background: rgb(126, 171, 255);
  &:hover {
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 2px solid ${styles.PURPLE};
  }
  padding: 1em;
  text-align: center;
  cursor: pointer;
`;
const Tag4 = styled.h3`
  grid-column: 4;
  color: white;
  background: rgb(126, 171, 255);
  &:hover {
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 2px solid ${styles.PURPLE};
  }
  padding: 1em;
  text-align: center;
  cursor: pointer;
`;
const Tag5 = styled.h3`
  grid-column: 5;
  color: white;
  background: rgb(126, 171, 255);
  &:hover {
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 2px solid ${styles.PURPLE};
  }
  padding: 1em;
  text-align: center;
  cursor: pointer;
`;
