import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import * as styles from "../components/StyledComponents";
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
    box-shadow: 0 2px 3px 0 ${styles.MAIN_COLOR},
      0 2px 5px 0 ${styles.MAIN_COLOR};
    grid-column: 2;
    min-width: 650px;
    max-width: 1200px;
    margin-right: 2em;
    max-height: 82px;
  }

  .nav {
    grid-row: 1;
    grid-column: 1 / -1;
  }
`;

const Sidebar = styled.div`
  display: grid;
  justify-self: center;
  grid-column: 3;
  grid-row: 4 / 20;
  grid-template-rows: 10% auto auto auto auto;
  grid-template-columns: 1;
  grid-row-gap: 20px;
  min-width: 250px;
  max-width: 250px;
  font-family: Arial, Helvetica, sans-serif;
`;

const UserTitle = styled.h3`
  grid-row: 1;
  color: ${styles.LINK_COLOR};
  justify-self: center;
`;

const UserStats = styled.div`
  grid-row: 2;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #ffeec2;
  border-color: #f2f2f2;
  display: grid;
  min-height: 145px;
  max-width: 300px;
  grid-template-columns: auto auto auto;
  grid-template-rows: 70% 30%;
  color: ${styles.GRAY_2};

  .title {
    grid-row: 2;
    grid-column: 1/4;
    border-bottom-style: inset;
    border-bottom-color: lightgray;
    border-bottom-width: 1px;
    text-align: center;
    background: white;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  .answers {
    grid-row: 1;
    grid-column: 1/2;
    align-self: stretch;
    display: grid;
    text-align: center;
    grid-template-rows: 70% 30%;
    padding: 5px;
    align-self: stretch;
    &:hover {
      background: #ffe398;
    }
  }

  .questions {
    grid-row: 1;
    grid-column: 2/3;
    align-self: stretch;
    display: grid;
    grid-template-rows: 70% 30%;
    padding: 5px;
    text-align: center;
    &:hover {
      background: #ffe398;
    }
  }

  .comments {
    grid-row: 1;
    grid-column: 3/4;
    align-self: stretch;
    display: grid;
    text-align: center;
    grid-template-rows: 70% 30%;
    padding: 5px;
    &:hover {
      background: #ffe398;
    }
  }

  .number {
    text-align: center;
    font-size: 150%;
    padding: 2px;
    grid-row: 1;
    align-self: center;
  }
`;
const UserQuestions = styled.div`
  grid-row: 3;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #c6cbf9;
  border-color: #f2f2f2;
  display: grid;
  max-width: 350px;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto 50px;
  color: ${styles.GRAY_2};

  .title {
    grid-row: 2;
    grid-column: 1/4;
    border-bottom-style: inset;
    border-bottom-color: lightgray;
    border-bottom-width: 1px;
    text-align: left;
    background: white;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  .questions {
    grid-row: 1;
    gridcolumn: 1/4;
    justifygn-self: stretch;
    display: grid;
    grid-template-rows: auto auto auto;

    .item {
      grid-row: span 1;
      border-bottom: 1px solid darkgray;
      text-align: left;
      padding: 3px;
      align-self: stretch;
      justify-self: stretch;
      &:hover {
        background: #a4adf9;
      }

      .qtitle {
        color: white;
        padding: 5px;
        text-shadow: 1px 1px 4px rgba(150, 150, 150, 1);
      }

      .qBody {
        padding: 5px;
        max-width: 300px;
      }
    }
  }
`;

const UserAnswers = styled.div`
  grid-row: 4;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #92CDEC;
  border-color: #f2f2f2;
  display: grid;
  max-width: 350px;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto 50px;
  color: ${styles.GRAY_2};

  .title {
    grid-row: 2;
    grid-column: 1/4;
    border-bottom-style: inset;
    border-bottom-color: lightgray;
    border-bottom-width: 1px;
    text-align: left;
    background: white;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  .answers {
    grid-row: 1;
    gridcolumn: 1/4;
    justifygn-self: stretch;
    display: grid;
    grid-template-rows: auto auto auto;

    .item {
      grid-row: span 1;
      border-bottom: 1px solid darkgray;
      text-align: left;
      padding: 3px;
      align-self: stretch;
      justify-self: stretch;
      &:hover {
        background: #67B2DA;
      }

      .user {
        color: white;
        padding: 5px;
        text-shadow: 1px 1px 4px rgba(150, 150, 150, 1);
      }

      .aBody {
        padding: 5px;
        max-width: 300px;
      }
    }
  }
`;

const Button = styled.button`
  grid-column: 3;
  grid-row: 2;
  background: linear-gradient(to bottom, ${"white"}, lightsteelblue);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background: rgb(233, 243, 248);
    border: 2px solid ${styles.MAIN_COLOR};
  }
  font-size: 1em;
  font-weight: bold;
  margin-right: 2em;
  padding: 1em 1em;
  border: 2px solid ${styles.SECONDARY_COLOR};
  border-radius: 3px;
  justify-self: right;
  align-self: center;
  height: 80px;
  min-width: 200px;
`;
const Heading = styled.div`
  display: grid;
  grid-template-columns: 20% 15% auto;
  grid-template-rows: auto 20%;
  grid-row: 2;
  grid-column: 2 / 3;
  font-size: 16px;
  align-self: center;
`;
const Divider = styled.div`
  grid-column: 1 / 5;
  border-bottom: 2px solid ${styles.MAIN_COLOR};
  margin-left: 1.5em;
  margin-right: 1.5em;
`;
const Preview = styled.h1`
  grid-column: 1;
  margin-left: 1em;
  margin-top: 1em;
  font-size: 30px;
  min-width: 200px;
  color: midnightblue;
`;
const Tag2 = styled.h3`
  grid-column: 3;
  color: ${styles.MAIN_COLOR};
  background: white;
  &:hover {
    color: ${styles.LINK_COLOR};
    background: linear-gradient(to bottom, ${"white"}, rgb(233, 243, 248));
  }
  border: 1px solid black;
  border-top: 1px solid white;
  border-left: 1px solid white;
  padding: 1em;
  text-align: center;
  cursor: pointer;
`;
const Tag3 = styled.h3`
  grid-column: 4;
  color: ${styles.MAIN_COLOR};
  background: white;
  &:hover {
    color: ${styles.LINK_COLOR};
    background: linear-gradient(to bottom, ${"white"}, rgb(233, 243, 248));
  }
  padding: 1em;
  text-align: center;
  border: 1px solid black;
  border-top: 1px solid white;
  cursor: pointer;
`;
const Tag4 = styled.h3`
  grid-column: 5;
  color: ${styles.MAIN_COLOR};
  background: white;
  &:hover {
    color: ${styles.LINK_COLOR};
    background: linear-gradient(to bottom, ${"white"}, rgb(233, 243, 248));
  }
  padding: 1em;
  text-align: center;
  border: 1px solid black;
  border-top: 1px solid white;
  cursor: pointer;
`;
const Tag5 = styled.h3`
  grid-column: 6;
  color: ${styles.MAIN_COLOR};
  background: white;
  &:hover {
    color: ${styles.LINK_COLOR};
    background: linear-gradient(to bottom, ${"white"}, rgb(233, 243, 248));
  }
  padding: 1em;
  text-align: center;
  border: 1px solid black;
  border-top: 1px solid white;
  border-right: 1px solid white;
  cursor: pointer;
`;

export default class QuestionsPage extends Component {
  componentDidMount() {
    this.props.getPostByQuery({ postTypeId: 1, sortBy: "-createdAt" });
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
          <Preview>{this.props.post.sortedBy}</Preview>
          <Tag2
            onClick={() => {
              this.props.changeSortedBy("Newest");
              this.props.getPostByQuery({
                sortBy: "-createdAt",
                PostTypeId: 1
              });
            }}
          >
            Newest
          </Tag2>
          <Tag3
            onClick={() => {
              this.props.changeSortedBy("Popular");
              this.props.getPostByQuery({
                sortBy: "-viewCount",
                PostTypeId: 1
              });
            }}
          >
            Popular
          </Tag3>
          <Tag4
            onClick={() => {
              this.props.changeSortedBy("Bounty");
              this.props.getPostByQuery({
                sortBy: "-bounty",
                PostTypeId: 1
              });
            }}
          >
            Bounty
          </Tag4>
          <Tag5
            onClick={() => {
              this.props.getRecomendations();
            }}
          >
            Recomended
          </Tag5>
        </Heading>
        <Divider />
        <Button onClick={() => this.props.openModal("ask")}>
          Ask a Question
        </Button>
        <Sidebar>
          <UserTitle>{ this.props.authentication.userInfo.username }</UserTitle>
          <UserStats>
            <div className="title">Your Stats</div>
            <div className="answers">
              <div className="number">5</div>answers
            </div>
            <div className="questions">
              <div className="number">10</div>
              <div>questions</div>
            </div>
            <div className="comments">
              <div className="number">20</div>comments
            </div>
          </UserStats>
          <UserQuestions>
            <div className="title">Latest questions</div>
            <div className="questions">
              <div className="item">
                <div className="qtitle">
                  Spring-boot actuator - trace to file
                </div>
                <div className="qBody">
                  In spring boot we have trace endpoint. Is it possible to
                  redirect these entries into file ? I was trying to find this
                  in internet, but no effects.
                </div>
              </div>
              <div className="item">
                <div className="qtitle">
                  Trying to insert data into SQL Server database using asp.net
                  web application, getting an error
                </div>
                <div className="qBody">
                  Try using CSS to limit the width or padding of the element.
                  Eg. .tooltip: width: 100%; padding: 0px; This could limit the
                  width of your tooltip element. You could also just use
                  aelement. Which would also contain the element within its own
                  bounds.
                </div>
              </div>
              <div className="item">
                <div className="qtitle">
                  Which character encoding Python 3.x supports for file I/O?
                </div>
                <div className="qBody">
                  apoorva@apoorva-latitude-e6410:~/Documents/project$ node
                  package.json
                  apoorva@apoorva-latitude-e6410:~/Documents/project$ npm
                  install npm WARN package.json @ No description npm WARN
                  package.json @ No repository field . npm WARN package.json @
                  No README data npm ERR! Linux 4.4.0-51-generic npm ERR! argv
                  "/usr/local/bin/node" "/usr/local/bin/npm" "install" npm ERR!
                  node v0.12.2 npm ERR! npm v2.7.4 npm ERR! version not found:
                  mongodb@3.2.11 npm ERR! npm ERR! If you need help, you may
                  report this error at: npm ERR!
                  https://github.com/npm/npm/issues npm ERR! Please include the
                  following file with any support request: npm ERR!
                  /home/apoorva/Documents/project/npm-debug.log How to solve
                  this problem?I tried a lot but unable to fix this problem.
                </div>
              </div>
            </div>
          </UserQuestions>
          <UserAnswers>
            <div className="title">Latest answers</div>
            <div className='answers'>
            <div className="item">
              <div className="user">User1234</div>
              <div className="aBody">
                poorva@apoorva-latitude-e6410:~/Documents/project$ npm install
                npm WARN package.json @ No description npm WARN package.json @
                No repository field . npm WARN package.json @ No README data npm
                ERR! Linux 4.4.0-51-generic npm ERR! argv "/usr/local/bin/node"
                "/usr/local
              </div>
            </div>
            <div className="item">
              <div className="user">User1234</div>
              <div className="aBody">
                poorva@apoorva-latitude-e6410:~/Documents/project$ npm install
                npm WARN package.json @ No description npm WARN package.json @
                No repository field . npm WARN package.json @ No README data npm
                ERR! Linux 4.4.0-51-generic npm ERR! argv "/usr/local/bin/node"
                "/usr/local
              </div>
            </div>
            <div className="item">
              <div className="user">User1234</div>
              <div className="aBody">
                poorva@apoorva-latitude-e6410:~/Documents/project$ npm install
                npm WARN package.json @ No description npm WARN package.json @
                No repository field . npm WARN package.json @ No README data npm
                ERR! Linux 4.4.0-51-generic npm ERR! argv "/usr/local/bin/node"
                "/usr/local
              </div>
            </div>
            </div>
          </UserAnswers>
        </Sidebar>
        <AskQuestion
          {...this.props}
          title={this.props.textInput.title}
          body={this.props.textInput.body}
          showModal={(() => {
            console.log("this.props.showMOda.ask", this.props.showModal.ask);
            return this.props.showModal.ask;
          })()}
          closeModal={this.props.closeModal}
          userInfo={this.props.authentication.userInfo}
          authentication={this.props.authentication}
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
