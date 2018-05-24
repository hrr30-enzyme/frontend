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
    box-shadow: 0 2px 3px 0 ${styles.MAIN_COLOR}, 0 2px 5px 0 ${styles.MAIN_COLOR};
    grid-column: 2;
    min-width: 650px;
    max-width: 1200px;
    margin-right: 3em;
  }

  .nav {
    grid-row: 1;
    grid-column: 1 / 5;
  }
`

const Sidebar = styled.div`
  display: grid;
  grid-column: 3;
  grid-row: 4 / span 6;
  grid-template-rows: 10% auto auto auto auto;
  grid-template-columns: 1; 
  grid-row-gap: 30px; 
  min-width: 250px;
`
const UserTitle = styled.h3`
  grid-row: 1;
  color: ${styles.LINK_COLOR};
  justify-self: center;
`
const UserStats = styled.div`
  grid-row: 2;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #fcfcfc;
  border-color: #f2f2f2;
  padding: 10px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 20% 80%

  .title {
    text-align: center;
    padding: 5px;
    grid-column: 2/3;
    grid-row: 1;
    align-self: center;
  };

  .answers {
    grid-row: 2;
    grid-column: 1/2
    align-self: center;
  };

  .questions {
    grid-row: 2;
    grid-column: 2/3
    align-self: center;
  };

  .comments {
    grid-row: 2;
    grid-column: 3/4
    align-self: center;
  };
  
`
const UserQuestions = styled.div`
  grid-row: 3;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #faefff;
  border-color: #f2f2f2;
`

const UserAnswers = styled.div`
  grid-row: 4;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #faefff;
  border-color: #f2f2f2
`

const Button = styled.button`
  grid-column: 3;
  grid-row: 2;   
  background: linear-gradient(to bottom, ${'white'}, rgb(194, 231, 255));
  font-size: 1em;
  font-weight: bold;
  margin-right: 4em;
  padding: 1em 1em;
  border: 2px solid ${styles.SECONDARY_COLOR};
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
  grid-row: 2; 
  grid-column: 2 / 3;
  font-size: 16px;
  align-self: center;
`
const Divider = styled.div`
  grid-column: 1 / 5;
  border-bottom: 4px solid ${styles.MAIN_COLOR};
  margin-left: 1em;
  margin-right: 1em;
`
const Preview = styled.h1`
  grid-column: 1;
  margin-left: 1em;
  margin-top: 1em;
  font-size: 30px;
  min-width: 200px;
  color: ${styles.LINK_COLOR};
`
const Tag2 = styled.h4`
  grid-column: 3;
  color: ${styles.MAIN_COLOR};
  &:hover {
    color: ${styles.TITLE_FONT};
  } 
  border: 1px solid black;
  border-top: 1px solid white; 
  border-left: 1px solid white;             
  padding: 1em;
  text-align: center;
  cursor: pointer;
`
const Tag3 = styled.h4`
  grid-column: 4;
  color: ${styles.MAIN_COLOR};
  &:hover {
    color: ${styles.TITLE_FONT};
  } 
  padding: 1em;
  text-align: center;  
  border: 1px solid black;
  border-top: 1px solid white;   
  cursor: pointer;
`
const Tag4 = styled.h4`
  grid-column: 5;
  color: ${styles.MAIN_COLOR};
  &:hover {
    color: ${styles.TITLE_FONT};
  } 
  padding: 1em;
  text-align: center;  
  border: 1px solid black;
  border-top: 1px solid white;   
  cursor: pointer;
`
const Tag5 = styled.h4`
  grid-column: 6;
  color: ${styles.MAIN_COLOR};
  &:hover {
    color: ${styles.TITLE_FONT};
  } 
  padding: 1em;
  text-align: center;  
  border: 1px solid black;
  border-top: 1px solid white;     
  border-right: 1px solid white;
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
              this.props.getRecomendations();
            }}
          >
            Recomended
          </Tag5>
        </Heading>
        <Divider></Divider>
        <Button onClick={() => this.props.openModal("ask")}>Ask a Question</Button>
        <Sidebar>
          <UserTitle>
            User Place Holder
          </UserTitle>
          <UserStats>
            <div className='title'>Your Stats</div>
          <div className='answers'>
            <div className='number'>5</div>answers
          </div>
          <div className='questions'>
            <div className='number'>10</div>questions
          </div>
          <div className='number'>20</div>comments
          </div>
          </UserStats>
          <UserQuestions>
            Question Place Holder
          </UserQuestions>
          <UserAnswers>
            ANswer Place Holder
          </UserAnswers>
        </Sidebar>
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
