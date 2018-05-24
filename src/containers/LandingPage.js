import React, { Component } from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group' 
import * as styles from '../components/StyledComponents'

import Navbar from '../components/Navbar'

const Div = styled.div`
  .top-pic: 100vh;
  .min-height: 650px;
  padding-top: 0;
  padding-bottom: 0;
  background-size: cover;
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
    grid-template-rows: auto;
    align-content: center;
    justify-content: center;
    height: 100vh;
    min-height: 650px;
    background-color: ${styles.MAIN_COLOR};
    margin-bottom: 0;
  }
`;

const transparentNav = styled.nav`
  width: 100%;
  position: fixed;  
  display: grid;
  padding-left: .6em;
  grid-template-columns: 5em 5em 6em auto 5em 5em 5em;
  height: 2.3em;
  align-items: center;
  border-bottom: solid transparent;
  top: 0;
  border-width: 1px;
  font-weight: bold;
  -webkit-transition: all 1s linear;
  -moz-transition: all 1s linear;
  -o-transition: all 1s linear;
  transition: all 1s linear;
  > .nav-item {
    display: inline
  }
  > .nav-title {
    grid-column: 1 / 2;
  }
  > .nav-home {
    grid-column: 2 / 3;
  }
  > .nav-questions {
    grid-column: 3 / 4;
  }
  > .nav-searchbar {
    grid-column: 4 / 5
    width: 65%
  }
  > .nav-auth {
    cursor: pointer;
    color: ${styles.SKY_BLUE};
  }
  > .nav-auth:hover {
    color: ${styles.PURPLE};
  }
`;

const mainNav = styled.nav`
  display: grid;
  position: fixed;
  width: 100%;
  margin-top: 0px;
  padding-left: .6em;
  grid-template-columns: 5em 5em 6em auto 5em 5em 5em;
  height: 2.3em;
  align-items: center;
  background-color: #ffffff;
  border-bottom: solid #888;
  border-width: 1px;
  font-weight: bold;
  top: 0;
  > .nav-item {
    display: inline
  }
  > .nav-title {
    grid-column: 1 / 2;
  }
  > .nav-home {
    grid-column: 2 / 3;
  }
  > .nav-questions {
    grid-column: 3 / 4;
  }
  > .nav-searchbar {
    grid-column: 4 / 5
    width: 65%
  }
  > .nav-auth {
    cursor: pointer;
    color: gray;
  }
  > .nav-auth:hover {
    color: #00b273;
  }
`;

const Logo = styled.h1`
  color: ${styles.PURPLE};
  font-size: 10em;
  > span {
    font-size: .84em;
  }
`;

const Tagline = styled.p`
  text-align: center;
  display: block;
  color: #a500ff;
  font-size: 3em;
  font-weight: bold;
`

const AboutSection = styled.section`
  background: linear-gradient(to bottom, ${styles.MAIN_COLOR}, ${styles.SKY_BLUE});
  margin-top: 0;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  > h2 {
    grid-column: 1 / 2;
  }
  > p {
    grid-column: 1 / 2;
  }
`;

export default class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrolled: false,
      scroll: 0,
    }
    transparentNav.linkColor = styles.SKY_BLUE;
    transparentNav.linkColorHover = styles.PURPLE;
  }

  navStyle() {
    return this.state.scrolled ? mainNav : transparentNav
  }

  componentDidMount() {
    window.onscroll = () => {
      if (window.pageYOffset > 20) {
        this.setState({
          scrolled: true,
          scroll: window.pageYOffset,
        });
      } else {
        this.setState({
          scrolled: false,
          scroll: window.pageYOffset,
        });
      }
    }
  }

  render() {
    return (
      <Div>
      {/* Trying to get this to fade in */}
          <Navbar 
            {...this.props} 
            NavStyle={ this.navStyle() }
          />
          <header className="top-pic">
          <div className="logo-container">
            <Logo className="main-logo">
              {"<"}<span>CATALYST</span> {"/>"}
            </Logo>
            <Tagline className="tag-line">Accelerated Discovery</Tagline>
          </div>
        </header>

        <AboutSection id="about">
          <h2>Get answers fast</h2>
          <p>
            {`
              Catalyst is a decentralized question/answer forum to get your programming questions answered.   
              
              Question bounties help your programming questions get answered fast.  
              
              Users upvote posts and the best answer gets payed out in ethereum.
            `}
          </p>
          <h2>Intelligent and secure platform</h2>
          <p>
            {`
              Answers add to the bounty when contributing their answer.   This creates intelligent high quality answers as your answerers will be putting their money where there mouth is.

              The ethereum network provides a secure and decentralized platform for users.
            `}
          </p>
        </AboutSection>

        <section id="us">
          
          this section has information about us who built the app
        </section>

        <section id="portfolio">
          More information about the app
        </section>

        <section id="signup-now">
          sign up now button
        </section>

        <section id="stack">
          maybe some information about the tech stack
        </section>
      </Div>
    );
  }
}