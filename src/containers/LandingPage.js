import React, { Component } from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import AskQuestion from '../components/AskQuestion'

import QuestionPreview from '../components/QuestionPreview'

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
`



class Landing extends Component {

  componentDidMount(){
    this.props.getQuestions({});
  }

  render(){
    return (
      <Layout>
        <div className="nav">
          <Navbar {...this.props}/>
        </div>
        <QuestionPreview/>
      </Layout>
    )
  }

} 



export default Landing;

