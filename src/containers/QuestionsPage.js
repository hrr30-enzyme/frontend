import React, { Component } from "react";
import styled from "styled-components";
import * as styles from '../components/StyledComponents'
import Navbar from "../components/Navbar";
import QuestionPreview from "../components/QuestionPreview";
import AskQuestion from "../components/AskQuestion";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 5% auto auto 5%;
  grid-column-gap: 30px;
  grid-row-gap: 15px;

  .question {
    border: 2px solid ${styles.SECONDARY_COLOR};
    grid-column: 2 / 4;
    min-width: 650px;
  }

  .nav {
    grid-row: 1;
    grid-column: 1 / 5;
  }
`

const Button = styled.button`
  grid-column: 3;
  grid-row: 2;   
  background: ${styles.Button};
  font-size: 1em;
  margin: 1em 1em 1em 1em;
  padding: 1em 1em;
  border: 2px solid ${styles.SECONDARY_COLOR};
  border-radius: 5px;
  justify-self: right;
  align-self: center;
  height: 60px;
  min-width: 145px;
`
const Heading = styled.div`
  display: grid;
  grid-template-columns: 20% 15% auto;
  grid-template-rows: auto 20%; 
  grid-row: 2; 
  grid-column: 2 / 3;
  font-size: 16px;
`
const Divider = styled.div`
  grid-column: 2 / 4;
  border-bottom: 4px solid black;
`
const Preview = styled.h1`
  grid-row: 1;
  grid-column: 1;
  min-width: 200px;
  color: ${styles.MAIN_COLOR};
`
const Tag = styled.h4`
  grid-row: 1;
  color: ${styles.MAIN_COLOR};
  &:hover {
    color: ${styles.TITLE_FONT};
  } 
  width: 100px;
  border: 1px solid black;
  border-radius: 5px;  
  padding: 1em;
  cursor: pointer;
`


export default class QuestionsPage extends Component {

  componentDidMount() {
    this.props.getPostByQuery({postTypeId: 1, sortBy: '-createdAt'})  
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
          <Preview>
            { this.props.post.sortedBy }
          </Preview>
          <Tag
            onClick={ () => {
              this.props.changeSortedBy('Newest');
              this.props.getPostByQuery({
                sortBy: '-createdAt',
                PostTypeId: 1,
              });
            }}
          >
            Newest
          </Tag>
          <Tag
            onClick={ () => {
              this.props.changeSortedBy('Popular');
              this.props.getPostByQuery({
                sortBy: '-viewCount',
                PostTypeId: 1,  
              });
            } }
          >
            Popular
          </Tag>
          <Tag
            onClick={ () => {
              this.props.changeSortedBy('Bounty');
              this.props.getPostByQuery({
                sortBy: '-bounty',
                PostTypeId: 1,
              })
            } }
          >
            Bounty
          </Tag>
          <Tag
            onClick={ () => {
              this.props.getRecomendations();
            }}
          >
            Recomended
          </Tag>
        </Heading>
        <Divider></Divider>
        <Button onClick={() => this.props.openModal("ask")}>Ask a Question</Button>

        <AskQuestion
          { ...this.props }
          title={this.props.textInput.title}
          body={this.props.textInput.body}
          showModal={(() => {
            console.log('this.props.showMOda.ask', this.props.showModal.ask)
            return this.props.showModal.ask
          })()}
          closeModal={this.props.closeModal}
          userInfo ={this.props.authentication.userInfo}
          authentication = {this.props.authentication}
          addText={ this.props.addText }
          postQuestion= { this.props.postQuestion }
        />
        {this.props.post.questions.map(question => (
          <div className="question">
            <QuestionPreview
              qid={question.id}
              question={question}
              style={{textDecoration: 'none'}}
              {...this.props}
            />
          </div>
        ))}
      </Layout>
    );
  }
}
