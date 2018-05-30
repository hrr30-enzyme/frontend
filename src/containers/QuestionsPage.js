import React, { Component } from "react"
import styled from "styled-components"
import * as styles from "../components/StyledComponents"
import Navbar from "../components/Navbar"
import QuestionPreview from "../components/QuestionPreview"
import AskQuestion from "../components/AskQuestion"

export default class QuestionsPage extends Component {
  
  constructor() {
    super()
    this.state = {
      tags: []
    }

    this.clickTag = this.clickTag.bind(this)
  }

  clickTag(tag) {
    var tags = [tag];
    this.setState({ tags: tags })
  }

  componentDidMount() {
    this.props.getPostByQuery({ postTypeId: 1, sortBy: "-createdAt" })
  }

  render() {
    console.log("questionsPage", this.props)
    console.log(this.props.post.questions)
    return (
      <Layout>
        <div className="nav">
          <Navbar {...this.props} />
        </div>
        <Heading>
          <Tag2
            active={this.state.tags[0] === 'newest'}
            onClick={() => {
              this.props.changeSortedBy("Newest")
              this.props.getPostByQuery({
                sortBy: "-createdAt",
                PostTypeId: 1
              });
              this.clickTag('newest')
            }}
          >
            Newest
          </Tag2>
          <Tag3
            active={this.state.tags[0] === 'popular'}
            onClick={() => {
              this.props.changeSortedBy("Popular")
              this.props.getPostByQuery({
                sortBy: "-viewCount",
                PostTypeId: 1
              });
              this.clickTag('popular')
            }}
          >
            Popular
          </Tag3>
          <Tag4
            active={this.state.tags[0] === 'bounty'}
            onClick={() => {
              this.props.changeSortedBy("Bounty")
              this.props.getPostByQuery({
                sortBy: "-bounty",
                PostTypeId: 1
              });
              this.clickTag('bounty')
            }}
          >
            Bounty
          </Tag4>
          <Tag5
            active={this.state.tags[0] === 'recomended'}
            onClick={() => {
              console.log('isloggedin', this.props)
              this.clickTag('recomended')
              if (this.props.auth.isAuthenticated === true) {
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
        <Preview>
        </Preview>
        <AskQuestion
          {...this.props}
          title={this.props.textInput.title}
          body={this.props.textInput.body}
          showModal={(() => {
            console.log("this.props.showMOda.ask", this.props.showModal.ask)
            return this.props.showModal.ask;
          })()}
          closeModal={this.props.closeModal}
          user={this.props.auth.user}
          auth={this.props.auth}
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
  grid-row-gap: 10px;
  background-color: ${styles.SECONDARY_COLOR};

  .question {
    border: 2px solid ${styles.SKY_BLUE};
    border-radius: 10px;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.9);
    margin-right: 1em;
    margin-left: 1em;
    grid-column: 2 / 5;
    &:hover {
      border: 2px solid ${styles.GREEN};
    }
  }
  .nav {
    grid-row: 1;
    grid-column: 1 / -1;
  }
`
const Button = styled.button`
  grid-column: 5;
  color: ${styles.LINK_COLOR};
  cursor: pointer;
  background: ivory;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2), 0 1px 2px 1px rgba(0, 0, 0, 0.25);
  &:hover {
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 3px solid ${styles.GREEN_HOVER};
  }
  font-size: 1em;
  font-weight: bold;
  margin: 1em;
  border: 3px solid ${styles.SKY_BLUE};
  border-radius: 10px;
  justify-self: center;
  align-self: center;
  min-height: 80px;
  min-width: 100px;
`
const Heading = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 117px auto;
  grid-row: 2;
  grid-column-gap: 10px;
  grid-column: 2 / 5;
  align-items: center;
  background-color: ${styles.NAVY};
  border-bottom: 1.2px solid ${styles.MAIN_FONT};
  border-top: 1.2px solid ${styles.MAIN_FONT};
  font-family: Arial Narrow, sans-serif;
  font-weight: bold;
`
const Preview = styled.div`
  grid-row: 2 / span 9;
  grid-column: 1;
  display: grid;
  grid-template-rows: auto;
  font-size: 26px;
  color: ${styles.MAIN_FONT};
  background-color: ${styles.NAVY};
  text-align: center;
  border: 1.2px solid ${styles.MAIN_FONT};
`
const Tag2 = styled.div`
  grid-column: 1;
  color: white;
  background: rgb(126, 171, 255);
  border: 1.5px solid ${styles.TITLE_FONT};
  &:hover {
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 2px solid ${styles.GREEN_HOVER};
  };
  ${({ active }) => active && `
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 2px solid ${styles.GREEN_HOVER};
  `};
  padding: 1em;
  margin-left: 2em;
  text-align: center;
  cursor: pointer;
`
const Tag3 = styled.div`
  grid-column: 2;
  color: white;
  background: rgb(126, 171, 255);
  border: 1.5px solid ${styles.TITLE_FONT};
  &:hover {
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 2px solid ${styles.GREEN_HOVER};
  };
  ${({ active }) => active && `
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 2px solid ${styles.GREEN_HOVER};
  `};
  padding: 1em;
  text-align: center;
  cursor: pointer;
`
const Tag4 = styled.div`
  grid-column: 3;
  color: white;
  background: rgb(126, 171, 255);
  border: 1.5px solid ${styles.TITLE_FONT};
  &:hover {
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 2px solid ${styles.GREEN_HOVER};
  };
  ${({ active }) => active && `
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 2px solid ${styles.GREEN_HOVER};
  `};
  padding: 1em;
  text-align: center;
  cursor: pointer;
`
const Tag5 = styled.div`
  grid-column: 4;
  color: white;
  background: rgb(126, 171, 255);
  border: 1.5px solid ${styles.TITLE_FONT};
  &:hover {
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 2px solid ${styles.GREEN_HOVER};
  };
  ${({ active }) => active && `
    color: ${styles.GREEN};
    background: ${styles.WHITE_BLUE};
    border: 2px solid ${styles.GREEN_HOVER};
  `};
  padding: 1em;
  text-align: center;
  cursor: pointer;
`
