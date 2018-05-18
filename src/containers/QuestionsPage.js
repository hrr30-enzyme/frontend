import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import QuestionPreview from "../components/QuestionPreview";
import AskQuestion from "../components/AskQuestion";
import { openModal } from "../actions/modal";
import { GET_QUESTION } from "../actions/types";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-column-gap: 1em;
  grid-row-gap: 1em;

  .nav {
    background-color: red;
    grid-column: 1/3;
  }

  .question {
    background-color: lightgrey;
    border: 2px solid grey;
    grid-column: 1/2;
  }

  .answers {
    background-color: green;
    grid-column: 1/2;
  }

  .giveanswer {
    background-color: blue;
    grid-column: 1/2;
  }

  .ask {
    background-color: yellow;
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;
const Button = styled.button`
  background: red;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default class QuestionsPage extends Component {

  componentDidMount() {
    this.props.getPostByQuery({postTypeId: 1, sortBy: '-createdAt'})
  }

  render(props) {
    console.log("questionsPage", this.props);
    console.log(this.props.post.questions);
    return (
      <Layout>
        {/*<div className="nav">
          <Navbar {...this.props} />
        </div>*/}
        <Button onClick={() => this.props.openModal("ask")}>Ask a Question</Button>
        <AskQuestion
          title={this.props.textInput.title}
          body={this.props.textInput.body}
          showModal={(() => {
            console.log('this.props.showMOda.ask', this.props.showModal.ask)
            return this.props.showModal.ask
          })()}
          closeModal={this.props.closeModal}
          userInfo ={this.props.authentication.userInfo}
          authentication = {this.props.authentication}
        />
        {this.props.post.questions.map(question => (
          <div className="question">
            <QuestionPreview
              qid={1}
              {...question}
              {...this.props}
            />
          </div>
        ))}
      </Layout>
    );
  }
}
