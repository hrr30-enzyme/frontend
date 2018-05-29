import React, { Component } from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group' 
import * as styles from '../components/StyledComponents'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrolled: false,
      scroll: 0,
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      if (window.pageYOffset > 20) {
        this.setState({
          scrolled: true,
          scroll: window.pageYOffset,
        })
      } else {
        this.setState({
          scrolled: false,
          scroll: window.pageYOffset,
        })
      }
    }
  }

  render() {
    return (
      <Div>
        <div className="nav">
          <Navbar {...this.props} />
        </div>
        <header className="top-pic">
          <div className="logo-container">
            <Logo className="main-logo">
              {"<"}<span>CATALYST</span> {"/>"}
            </Logo>
            <Tagline className="tag-line">Accelerated Knowledge</Tagline>
          </div>
        </header>
        <AboutSection id="about">
          <h2 className="title-1">Get <strong>paid</strong> for expertise</h2>
          <p>
            Users get payed 24/7 for top answers.  Win bounties for top answers and withdraw anytime.
          </p>
          <h2 className="title-1"> 
            Vote for the top answers
          </h2>
          <p>
            Top users vote based on their expertise.  The more expertise a user shows, the more voting power they recieve.
          </p>
          <img 
            alt="ethereum logo"
            src="./ethereum.png"
            height={ Math.min(510, this.state.scroll / 2)}
            style={{offset: Math.max(0, this.state.scroll / 10)}}
          />
        </AboutSection>
     </Div>
    )
  }
}

const mstyles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}

const Div = styled.div`
  .top-pic: 100vh;
  .min-height: 650px;
  padding-top: 0;
  padding-bottom: 0;
  background-size: cover;
  display: grid;
  grid-gap: 0px;
  background-position: center center;
  -webkit-transition: all 1s linear;
  -moz-transition: all 1s linear;
  -o-transition: all 1s linear;
  transition: all 1s linear;
  > .logo-container {
    padding: 
    max-width: 1100px;
    grid-column: 2/3;
  }
  > .top-pic {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto auto;
    align-content: center;
    justify-content: center;
    height: 100vh;
    min-height: 650px;
    background: linear-gradient(to bottom, ${styles.NAVY}, ${styles.GREEN});
    
    margin-bottom: 0;
  }
  .nav {
    grid-row: 1;
    grid-column: 1 / -1;
  }
`
const Logo = styled.h1`
  color: ${styles.TITLE_FONT};
  font-size: 8em;
  > span {
    font-size: .84em;
  }
`
const Tagline = styled.p`
  text-align: center;
  display: block;
  color: ${styles.POOL};
  font-size: 3em;
  font-weight: bold;
`
const AboutSection = styled.section`
  background-color: ${styles.DARKPURPLE};
  margin-top: 0;
  margin-bottom: 0;
  display: grid;
  padding: 0;
  grid-template-rows: auto auto auto auto auto auto auto;
  grid-template-columns: 1fr 2fr;
  height: 60vh;
  white-space: pre-wrap;
  
  p {
    grid-column: 1 / 2;
    color: white;
    text-indent: 0px;
  }
  .title {
    grid-column: 1 / 2;
    color: white;
  }
  .title-1 {
    grid-column: 1 / 2;
    color: white;
    font-size: 2.5em;
    text-align: left;
    font-weight: normal;
  }
  .title-1 > strong {
    font-weight: bold;
  }
  img {
    grid-column: 2 / 4;
    grid-row: 1 / 8;
    justify-self: center;
    align-self: center;
  }

  padding: 3em;
`
