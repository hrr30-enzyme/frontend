import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as styles from './StyledComponents'
import Signin from './Signin'
import Signup from './Signup'

import Search from '../components/Search'

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 7fr 1fr 1fr;
  height: 3.3em;
  align-items: center;
  justify-items: center;
  background-color: rgb(232, 246, 255);
  border-bottom: 1px solid #888;
  font-weight: bold;
  padding-left: 4em;

  > .nav-title {
    grid-column: 1 / 2;
    margin-right: 1em;
    font-size: 20px
  }
  > .nav-questions {
    grid-column: 3 / 4;
  }
  > .nav-home {
    grid-column: 2 / 3;
  }
  > .nav-searchbar {
    grid-column: 4 / 5;
    align-self: center;
    width: 60%;
    display: grid;
    grid-columns: 1fr;
  }
  > .nav-auth-signin {
    cursor: pointer;
    color: ${styles.SECONDARY_COLOR};
    grid-column: 5 / 6;
  }
  > .nav-auth-signup {
    cursor: pointer;
    color: ${styles.SECONDARY_COLOR};
    grid-column: 6 / 7;
  }
  > .nav-auth:hover {
    color: ${styles.MAIN_COLOR};
    grid-column: 6 / 7;
  }
`;


const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => styles.LINK_COLOR || styles.SECONDARY_COLOR};
  &:hover {
    color: ${(props) => styles.MAIN_COLOR};
  }
`

const Navbar = (props) => {
  console.log('nav bar', props)
  const signedIn = props.authentication.signedIn;

  let NavStyle = Nav;
  let linkColor = styles.SECONDARY_COLOR;
  let linkColorHover = styles.MAIN_COLOR;
  if (props.NavStyle) {
    NavStyle = props.NavStyle;
    linkColor = NavStyle.linkColor;
    linkColorHover = NavStyle.linkColorHover;
  } else {
    NavStyle = Nav;
  }

  return (
    <div>
      <NavStyle>
        <div className="nav-title">
          <StyledNavLink 
            to="/"
            linkColor={ linkColor }
            linkColorHover={ linkColorHover }
          >
            Catalyst
          </StyledNavLink>
        </div>
        <div className="nav-home">
          <StyledNavLink 
            to="/home"
            linkColor={ linkColor }
            linkColorHover={ linkColorHover }
          >
            Home
          </StyledNavLink>
        </div>
        <div className="nav-questions">
          <StyledNavLink 
            to="/questions"
            linkColor={ linkColor }
            linkColorHover={ linkColorHover }
          >
            Questions
          </StyledNavLink>
        </div>
        <div className="nav-searchbar">
            <Search {...props} />


        </div>
        
        {signedIn 
          ? (
            <div>
              <div className="nav-item">
                <StyledNavLink 
                  to={ `/user/${props.authentication.userInfo.username}` }
                  linkColor={ linkColor }
                  linkColorHOver={ linkColorHover }
                >
                  { props.authentication.userInfo.username }
                </StyledNavLink>
              </div>
              <div className="nav-item">
                <div onClick={ props.signout }>logout</div>
              </div>
            </div>
          )
          : [
              <div
                className="nav-auth-signin" 
                onClick={ () => props.openModal("signin") }
              >
                login
              </div>,
              <div 
                className="nav-auth-signup"
                onClick={() => props.openModal("signup")}
              >
                signup
              </div>,
          ]
        }
      </NavStyle>
      {/*
       * signin/signout modals
       *
       */}
       <Signin
          username={ props.textInput.username }
          password={ props.textInput.password }
          openModal={ props.openModal }
          closeModal={ props.closeModal }
          signin={ props.signin }
          showModal={ props.showModal.signin }
          message={props.showModal.message}
          addText={ props.addText }
          error={ props.authentication.error }
        />
        <Signup
          username={ props.textInput.username }
          password={ props.textInput.password }
          email={ props.textInput.email }
          openModal={ props.openModal }
          closeModal={ props.closeModal }
          signup={ props.signup }
          showModal={ props.showModal.signup }
          message={props.showModal.message}
          addText={ props.addText }
          error={ props.authentication.error }
        />
      </div>
  );
};

export default Navbar
