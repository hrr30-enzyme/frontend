import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import QuestionPreview from "../components/QuestionPreview";
import AskQuestion from "../components/AskQuestion";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 5% auto auto 5%;
  grid-column-gap: 30px;
  grid-row-gap: 15px;

  .nav {
    background-color: red;
    grid-column: 1/5;
  }

  .question {
    background-color: oldlace;
    border: 2px solid grey;
    grid-column: 2;
    min-width: 650px;
  }
`

const Button = styled.button`
  grid-column: 3;
  background: #980104;
  color: white;
  font-size: 1em;
  margin: 1em 1em 1em 1em;
  padding: 1em 1em;
  border: 2px solid oldlace;
  border-radius: 3px;
  justify-self: right;
  align-self: center;
  height: 60px;
  min-width: 145px;
`
const Heading = styled.div`
  display: grid;
  grid-template-columns: 20% 15% auto;
  grid-template-rows: auto 20%;  
  grid-column: 2;
  font-size: 16px;
  align-self: center;
  border-bottom: 1px solid black;
`
const Tag1 = styled.h2`
  grid-column: 1;
  min-width: 200px;
`
const Tag2 = styled.h4`
  grid-column: 3;
  color: #750104; 
  padding: 1em;
  cursor: pointer;
`
const Tag3 = styled.h4`
  grid-column: 4;
  color: #750104;
  padding: 1em;
  border-left: 1px solid black;
  cursor: pointer;
`
const Tag4 = styled.h4`
  grid-column: 5;
  color: #990004;
  padding: 1em;
  border-left: 1px solid black;
  cursor: pointer;
`
const Tag5 = styled.h4`
  grid-column: 6;
  color: #DEBB8A;
  padding: 1em;
  border-left: 1px solid black;
  cursor: pointer;
`
const Sidebar = styled.div`
  display: grid;
  grid-column: 3;
  grid-row: 3 / span 6;
  grid-template-rows: 10% auto;
  grid-template-columns: 1;  
  border: solid grey 2px;
  min-width: 250px;
`
const Hot = styled.h2`
  grid-row: 1;
  color: #990004;
  border-bottom: 1px solid black;
  align-self: center;
  justify-self: center;
`

export default class QuestionsPage extends Component {

  componentDidMount() {
    this.props.getPostByQuery({postTypeId: 1, sortBy: '-createdAt'})  
  }

  render(props) {
    console.log("questionsPage", this.props);
    console.log(this.props.post.questions);
    return (
      <Layout>
        <div className="nav">
          <Navbar {...this.props} />
        </div>
        <Heading>
          <Tag1>
            { this.props.post.sortedBy }
          </Tag1>
          <Tag2
            onClick={ () => {
              this.props.changeSortedBy('Newest');
              this.props.getPostByQuery({
                sortBy: '-createdAt',
                PostTypeId: 1,
              });
            }}
          >
            Newest
          </Tag2>
          <Tag3
            onClick={ () => {
              this.props.changeSortedBy('Popular');
              this.props.getPostByQuery({
                sortBy: '-viewCount',
                PostTypeId: 1,  
              });
            } }
          >
            Popular
          </Tag3>
          <Tag4
            onClick={ () => {
              this.props.changeSortedBy('Bounty');
              this.props.getPostByQuery({
                sortBy: '-bounty',
                PostTypeId: 1,
              })
            } }
          >
            Bounty
          </Tag4>
          <Tag5
            onClick={ () => {
              this.props.changeSortedBy('Recomended');
              this.props.getPostByQuery({
                special: 'recomended',
                PostTYpeId: 1,
              })
            }}
          >
            Recomended
          </Tag5>
        </Heading>
        <Button onClick={() => this.props.openModal("ask")}>Ask a Question</Button>
        <Sidebar>
          <Hot>
            FOR YOU
          </Hot>
        </Sidebar>
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
          addText={ this.props.addText }
          postQuestion= { this.props.postQuestion }
        />
        {this.props.post.questions.map(question => (
          <div className="question">
            <QuestionPreview
              qid={1}
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
