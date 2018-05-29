import React, { Component } from 'react'
import styled from 'styled-components'
import * as styles from "../components/StyledComponents"
import Question from '../components/Question'
import Answers from './Answers'
import GiveAnswer from '../components/GiveAnswer'
import Navbar from '../components/Navbar'

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
    const question = this.props.post.questions[0]
    console.log(question);
    return (
      <Layout>
        <div className="nav">
          <Navbar { ...this.props }/>
        </div>        
        <Question 
          question={ this.props.post.questions[0] }
          {...this.props} 
        />
        <AnswerDiv>Answers</AnswerDiv>
        <Answers 
          answers={ this.props.post.answers || [] }
          {...this.props}
        />
        <YourAnswerDiv>Your Answer</YourAnswerDiv>
        <GiveAnswer {...this.props}/>
      </Layout>
    );
  }
};

export default QuestionPage

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