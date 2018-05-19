import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1 auto;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  padding: 1em;

  > .title {
    font-weight: bold;
    font-size: 1.6em;
  }

  > .username {
    font-weight: bold;
    font-size: 1.5em;
    text-align: right;
  }

  > p {
    grid-column: 1/3;
  }
`;

class Question extends React.Component {

  componentDidMount(){
    this.props.getQuestion(this.props.match.params.id)

  }
  
  render(){
    console.log('Question page: ', this.props.post)
    return (
      <Div>
        {/* <div className="title">{this.props.post.posts.question.title}</div>
        <div className="username">{this.props.post.posts.question.UserId}</div>
        <p>{this.props.post.posts.question.body}</p> */}
      </Div>
    );
  }
};


export default Question