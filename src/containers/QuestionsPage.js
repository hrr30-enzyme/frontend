import React, { Component } from "react";
import styled from "styled-components";

<<<<<<< HEAD
import Navbar from '../components/Navbar'
import QuestionPreview from '../components/QuestionPreview'
import { openModal } from '../actions/modal';
=======
import Navbar from "../components/Navbar";
import QuestionPreview from "../components/QuestionPreview";
import { openModal } from "../actions/modal";
>>>>>>> Add openModal for Ask Question on Questions Page

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
<<<<<<< HEAD
`
=======
`;
>>>>>>> Add openModal for Ask Question on Questions Page
const Button = styled.button`
  background: red;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
<<<<<<< HEAD
`
=======
`;
>>>>>>> Add openModal for Ask Question on Questions Page

export default class QuestionsPage extends Component {
  
  componentDidMount() {
    // TODO must get questions here
  }

<<<<<<< HEAD
  render() {
    console.log('questionsPage', this.props)

  return (
    <Layout>
      <div className="nav">
        <Navbar { ...props }/>
      </div>
      { props.post.questions.map((question) => (
        <QuestionPreview { ...props } />
      )) }
      <Button onClick={()=>props.openModal('ask')}>Ask a Question</Button>
    </Layout>
  );
};
=======
  render(props) {
    console.log("questionsPage", this.props);

    return (
      <Layout>
        <div className="nav">
          <Navbar {...props} />
        </div>
        {props.post.questions.map(question => <QuestionPreview {...props} />)}
        <Button onClick={() => props.openModal("ask")}>Ask a Question</Button>
      </Layout>
    );
  }
}
>>>>>>> Add openModal for Ask Question on Questions Page
