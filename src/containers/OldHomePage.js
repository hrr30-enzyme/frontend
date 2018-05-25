import React, { Component } from "react";
import styled from "styled-components";
import * as FontAwesome from "react-icons/lib/fa";
import Navbar from "../components/Navbar";
import QuestionPreview from "../components/QuestionPreview";

import AskQuestion from "../components/AskQuestion";

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

  > .question {
    background-color: orange;
    grid-column: 1/2;
  }

  > .answers {
    background-color: green;
    grid-column: 1/2;
  }

  > .giveanswer {
    background-color: blue;
    grid-column: 1/2;
  }

  > .ask {
    background-color: yellow;
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

export default class HomePage extends Component {
  componentDidMount() {
    // TODO must get questions here
  }

  render() {
    console.log("Home Page", this.props);

    return (
      <Layout>
        <div className="nav">
          <Navbar {...this.props} />
        </div>
        <div className='question'>
          {this.props.post.questions.map(question => (
            <QuestionPreview {...this.props} />
          ))}
        </div>
        <div>
          <AskQuestion {...this.props} />
        </div>
      </Layout>
    );
  }
}
