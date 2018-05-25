import React, { Component } from 'react'
import styled from 'styled-components'
import * as styles from "../components/StyledComponents";
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
  min-width: 800px;
  > .nav {
    grid-column: 1 / -1;
    grid-row: 1;
  }
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
  align-self: top;
  height: 60px;
  min-width: 145px;
`
const Sidebar = styled.div`
  display: grid;
  grid-column: 3;
  grid-row: 2;
  grid-template-rows: 10% auto;
  grid-template-columns: 1;  
  border: solid grey 2px;
  min-width: 250px;
  margin-top: 100px;
`
const Hot = styled.h2`
  grid-row: 1;
  color: #990004;
  border-bottom: 1px solid black;
  align-self: center;
  justify-self: center;
  margin-top: 2em;
`
const AnswerDiv = styled.div`
  grid-column: 1 / 5;
  border-bottom: solid lightgrey 1px;
  padding: 1em;
  margin-bottom: 2em;
  font-weight: bold;
  font-size: 28px;
  color: ${styles.BORDER_MODAL};
`
const YourAnswerDiv = styled.div`
  grid-column: 1 / 5;
  border-top: solid grey 1px;
  padding: 1em;
  margin: 2em;
  font-weight: bold;
  font-size: 28px;
  color: ${styles.BORDER_MODAL};
`

class QuestionPage extends Component {
  componentDidMount() {
    this.props.getPostByQuery({
      id: this.props.match.params.id,
      include: 'all'
    });
    this.props.getAnswers({
      PostId: this.props.match.params.id,
      PostTypeId: 2,
      sortBy: '-upvoteCount',
      include: 'all'
    })
    this.props.updateViews({id: this.props.match.params.id, UserId: this.props.authentication.userInfo.id })
  }

  render() {
    console.log('Question page:', this.props)
    const question = this.props.post.posts.filter(post => post.PostTypeId === 1)[0]
    console.log(question);
    return (
      <Layout>
        <div className="nav">
          <Navbar { ...this.props }/>
        </div>
        <YourAnswerDiv>Your Answer</YourAnswerDiv>
        <GiveAnswer {...this.props}/>      
        <Question 
          question={ this.props.post.questions[0] }
          {...this.props} 
        />
        <AnswerDiv>Answers</AnswerDiv>
        <Answers 
          answers={ this.props.post.answers || [] }
          {...this.props}
        />
      </Layout>
    );
  }
};

export default QuestionPage