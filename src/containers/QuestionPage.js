import React, { Component } from 'react'
import styled from 'styled-components'

import Question from '../components/Question'
import Answer from '../components/Answer'
import Answers from './Answers'
import GiveAnswer from '../components/GiveAnswer'
import AskQuestion from '../components/AskQuestion'
import Navbar from '../components/Navbar'
import Ask from '../components/AskQuestion'

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 5% auto auto 5%;
  grid-column-gap: 30px;
  grid-row-gap: 15px;

  > .nav {
    background-color: red;
    grid-column: 1/5;
  }
`

const Stats = styled.div`
  grid-row: 2;
  grid-column: 2;
  display: grid;
  grid-template-columns: 75px 75px;
  grid-template-rows: auto;
  justify-self: left;
`
const Stat = styled.p`
  color: grey;
  grid-column: 1;
`
const Value = styled.p`
  color: black;
  grid-column: 2;
`
const Button = styled.button`
  grid-row: 2;
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
  padding-top: 1em;
`
const AnswerDiv = styled.div`
  grid-column: 1 / span 2;
  border-bottom: solid lightgrey 1px;
  padding: 1em;
  margin: 2em;
  font-weight: bold;
  font-size: 20px;
`
const YourAnswerDiv = styled.div`
  grid-column: 1 / span 2;
  border-top: solid lightgrey 1px;
  padding: 1em;
  margin: 2em;
  font-weight: bold;
  font-size: 20px;
`

class QuestionPage extends Component {
  componentDidMount() {
    this.props.getPostByQuery({
      PostId: this.props.match.params.id,
    });
  }

  render() {
    console.log('Questions page:', this.props)
    return (
      <Layout>
        <div className="nav">
          <Navbar { ...this.props }/>
        </div>        
        <Button onClick={() => this.props.openModal("ask")}>Ask a Question</Button>
        <Stats>
          <Stat>Asked</Stat><Value>Today</Value>
          <Stat>Viewed</Stat><Value>16 times</Value>
          <Stat>Active</Stat><Value>Today</Value>
        </Stats>
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
        <Question 
          question={ this.props.post.posts.filter(post => post.PostTypeId === 1)[0] } 
        />
        <AnswerDiv>Answers</AnswerDiv>
        <Answer 
          answer={ this.props.post.posts.filter(post => post.PostTypeId === 2)[0] }
        />
        <YourAnswerDiv>Your Answer</YourAnswerDiv>
        <GiveAnswer {...this.props}/>
      </Layout>
    );
  }
};

export default QuestionPage
