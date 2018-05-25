import React, { Component } from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group' 
import * as styles from '../components/StyledComponents'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'

const mstyles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

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
    background: linear-gradient(to bottom, ${"white"}, ${styles.LANDING_BLUE});
    
    margin-bottom: 0;
  }
`;

const TransparentNav = styled.nav`
  width: 100%;
  position: fixed;  
  display: grid;
  padding-left: 4em;
  padding: right: 5%;
  grid-template-columns: 1.3fr 1fr 1fr 7fr 1fr 1fr;
  height: 30px;
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
    width: 60%;
    display: grid;
    justify-self: center;
    grid-columns: 1fr;
  }
  > .nav-auth {
    cursor: pointer;
    color: ${styles.SKY_BLUE};
  }
  > .nav-auth:hover {
    cursor: pointer;
    color: ${styles.PURPLE};
  }
`;

const NavAuth = styled.div`
  cursor: pointer;
  color: ${styles.LINK_COLOR}
  &:hover {
    color: ${styles.SECONDARY_COLOR}
  }
`

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => styles.LINK_COLOR || styles.SECONDARY_COLOR};
  &:hover {
    color: ${(props) => styles.SECONDARY_COLOR};
  }
`

const MainNav = styled.nav`
  display: grid;
  position: fixed;
  width: 100%;
  margin-top: 0px;
  padding-left: 4em;
  grid-template-columns: 1.3fr 1fr 1fr 7fr 1fr 1fr;
  height: 30px;
  align-items: center;
  background-color: #ffffff;
  border-bottom: solid #888;
  border-width: 1px;
  font-weight: bold;
  top: 0;
  padding-right: 5%;
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
    width: 60%
    justify-self: center;
    display: grid;
    grid-columns: 1fr
  }
  > .nav-auth {
    cursor: pointer;
    color: gray;
  }
  > .nav-auth:hover {
    cursor: pointer;
    color: #00b273;
  }
`;

const Logo = styled.h1`
  color: ${styles.GRAY_4};
  font-size: 10em;
  > span {
    font-size: .84em;
  }
`;

const Tagline = styled.p`
  text-align: center;
  display: block;
  color: ${styles.GRAY_4};
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
  
  > p {
    grid-column: 1 / 2;
    color: white;
    text-indent: 0px;
  }
  > .title {
    grid-column: 1 / 2;
    color: white;

  }

  > .title-1 {
    grid-column: 1 / 2;
    color: white;
    font-size: 2.5em;
    text-align: left;
    text-
    font-weight: normal;
  }

  > .title-1 > strong {
    font-weight: bold;
  }
  > img {
    grid-column: 2 / 4;
    grid-row: 1 / 8;
    justify-self: center;
    align-self: center;
  }

  padding: 3em;
`;

const UsSection = styled.section`
  background-color: ${styles.YELLOW};
  height: 60vh;
  margin-top: 0px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 2em;
  padding: 3em;
  text-align: center;
  color: white;
  > img {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  > p {
    grid-column: 2 / 3;
    max-width: 40px;
  }
  > .title {
    grid -column: 2 / 3;
  }
`


const PortfolioSection = styled.section`
  height: 70vh;
  margin-top: 0px;
  background-color: ${styles.GRAY_1};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  
  grid-column-gap: 15em;
`

const Card = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-rows: 5fr 1fr;
  > img {
    width: 300px;
  }
  > div {
    width: 300px;
    background-color: ${styles.GRAY_2};
    height: 100%;
    color: ${styles.SKY_BLUE}
    text-align: center;
    font-size: 3em;
  }
`

const TechStackSection = styled.section`
  background-color: ${styles.REDISH}
  height: 60vh;
  margin-top: 0px;
  display: grid;
  grid-template-rows: 2;
  grid-template-columns: auto auto auto auto auto;
  padding: 3em;
`

const SignUpSection = styled.section`
  background-color: ${styles.GRAY_4}
  height: 25vh;
  margin-top: 0px;
  display: grid;
  height: 40px
  grid-template-columns: auto auto auto auto;
  font-size: 2.1;
`



export default class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrolled: false,
      scroll: 0,
    }
    TransparentNav.linkColor = styles.SECONDARY_COLOR;
    TransparentNav.linkColorHover = styles.MAIN_COLOR;
  }

  navStyle() {
    return this.state.scrolled ? MainNav : TransparentNav
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
            navStyle="transparent"
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

        <UsSection id="us">
          
          
          <img 
            alt="brain with gears"
            src="./brain.png"
            height={ 400 }
          />
          <div></div>
          <div>
          <h2 className="title">Intelligent and secure platform</h2>
          <p>
            Answers add to the bounty when contributing their answer.   This creates intelligent high quality answers as your answerers will be putting their money where there mouth is.
          </p>
          <p>
            The ethereum network provides a secure and decentralized platform for users.
          </p>
          </div>
        </UsSection>

        <PortfolioSection id="portfolio">
          <Card>
          <img alt="Kyle" src="./kyle.png" />
          <div className="Kyle">Kyle</div>
          </Card>
          <Card>
          <img alt="Eric" src="./eric.jpg" />
          <div className="Eric">Eric</div>
          </Card>
          <Card>
          <img alt="Will" src="./will.jpg" />
          <div className="will">Will</div>
          </Card>
        </PortfolioSection>
          
        <TechStackSection id="signup-now">
          <img 
              alt="elastic search logo"
              src="./elastic.png"
              height={  Math.max(Math.sin(this.state.scroll / 50) * 11, 7) + 160 }
              style={{offset: Math.max(.34, this.state.scroll / 10)}}
            />
            <img 
              alt="flask logo"
              src="./flask.png"
              height={  Math.max(Math.sin(1 + this.state.scroll / 50) * 11, 7) + 160 }
              style={{offset: Math.max(.62, this.state.scroll / 10)}}
            />
            <img 
              alt="node-sequelize logo"
              src="./node-sequelize.png"
              height={  Math.max(Math.sin(2 + this.state.scroll / 50) * 11, 7) + 160 }
              style={{offset: Math.max(.93, this.state.scroll / 10)}}
            />
            <img 
              alt="postgres logo"
              src="./postgres.png"
              height={ Math.max(Math.sin(3 + this.state.scroll / 50) * 11, 7) + 160 }
              style={{offset: Math.max(1.24, this.state.scroll / 10)}}
            />
            <img 
              alt="python logo"
              src="./python.png"
              height={ Math.max(Math.sin(this.state.scroll / 50) * 11,7) + 160 }
              style={{offset: Math.max(1.56, this.state.scroll / 10)}}
            />
            <img 
              alt="react-router logo"
              src="./react-router.svg"
              height={ Math.max(Math.sin(1 + this.state.scroll / 50) * 11, 7) + 160 }
              style={{offset: Math.max(1.88, this.state.scroll / 10)}}
            />
            <img 
              alt="react logo"
              src="./react.svg"
              height={ Math.max(Math.sin(2 + this.state.scroll / 50) * 11, 7) + 160 }
              style={{offset: Math.max(2.22, this.state.scroll / 10)}}
            />
            <img 
              alt="redux logo"
              src="./redux.png"
              height={ Math.max(Math.sin(3 + this.state.scroll / 50) * 11, 7) + 160 }
              style={{offset: Math.max(2.55, this.state.scroll / 10)}}
            />
            <img 
              alt="solidity logo"
              src="./soldity.svg"
              height={ Math.max(Math.sin(2.87 + this.state.scroll / 50) * 11, 7) + 160 }
            />
            <img 
              alt="styled components"
              src="./styled-components.png"
              height={ Math.max(Math.sin(3.1 + this.state.scroll / 50) * 44, 7) + 160 }
            />
        </TechStackSection>

        <SignUpSection id="stack">
            <StyledNavLink 
              to="/"
              linkColor={styles.SKY_BLUE}
              linkColorHOver={styles.SECONDARY_COLOR}
            >HOME</StyledNavLink>
            <StyledNavLink
              to="/questions"
              linkColor={styles.SKY_BLUE}
              linkColorHOver={styles.SECONDARY_COLOR}
            >
              QUESTIONS
            </StyledNavLink>
            {this.props.authentication.signedIn 
          ? (
            [
              <div className="nav-item">
                <StyledNavLink 
                  to={ `/user/${this.props.authentication.userInfo.username}` }
                  linkColor={ styles.SKY_BLUE }
                  linkColorHOver={ styles.SECONDARY_COLOR }
                >
                  { this.props.authentication.userInfo.username }
                </StyledNavLink>
              </div>,
              <NavAuth className="nav-item">
                <div onClick={ this.props.signout }>logout</div>
              </NavAuth>
            ]
          )
          : [
              <NavAuth
                className="nav-auth-signin" 
                onClick={ () => this.props.openModal("signin") }
              >
                Log In
              </NavAuth>,
              <NavAuth 
                className="nav-auth-signup"
                onClick={() => this.props.openModal("signup")}
              >
                Sign Up
              </NavAuth>
          ]
        }
       </SignUpSection> 
     </Div>
    )
  }
}

