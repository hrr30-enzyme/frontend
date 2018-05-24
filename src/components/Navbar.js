import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as styles from './StyledComponents'
import Signin from './Signin'
import Signup from './Signup'

import Search from '../components/Search'

const Nav = styled.nav`
  display: grid;
  padding-left: 2em;
  padding-bottom: 1em;
  grid-template-columns: 5em 5em 6em auto 5em 5em 5em;
  height: 2.3em;
  align-items: center;
  background-color: rgb(232, 246, 255);
  border-bottom: solid #888;
  border-width: 1px;
  font-weight: bold;
  > .nav-item {
    display: inline;
  }
  > .nav-title {
    grid-column: 1 / 2;
  }
  > .nav-questions {
    grid-column: 3 / 4;
  }
  > .nav-home {
    grid-column: 2 / 3;
  }
  > .nav-searchbar {
    grid-column: 4 / 6;
    justify-self: center;
  }
  > .nav-auth {
    cursor: pointer;
    color: ${styles.SECONDARY_COLOR};
  }
  > .nav-auth:hover {
    color: ${styles.MAIN_COLOR};
  }
`;


const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.linkColor || styles.SECONDARY_COLOR}
  &:hover {
    color: ${(props) => props.linkColorHover || styles.MAIN_COLOR};
  }
`

const handleClick = (e, cb, credentials) => {
  e.preventDefault();
  cb(credentials);
};

const handleClose = (e, cb) => {
  e.preventDefault();
  cb("signin");
};

const handleChange = (cb, inputType, input) => {
  cb(inputType, input);
};

const Navbar = (props) => {
  console.log('nav bar', props)
  const signedIn = props.authentication.signedIn;

  let NavStyle = props.NavStyle || Nav;
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
        <div className="nav-title nav-item">
          <StyledNavLink 
            to="/"
            linkColor={ linkColor }
            linkColorHover={ linkColorHover }
          >
            Catalyst
          </StyledNavLink>
        </div>
        <div className="nav-home nav-item">
          <StyledNavLink 
            to="/home"
            linkColor={ linkColor }
            linkColorHover={ linkColorHover }
          >
            Home
          </StyledNavLink>
        </div>
        <div className="nav-questions nav-item">
          <StyledNavLink 
            to="/questions"
            linkColor={ linkColor }
            linkColorHover={ linkColorHover }
          >
            Questions
          </StyledNavLink>
        </div>
        <div className="nav-searchbar nav-item">
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
                className="nav-auth" 
                onClick={ () => props.openModal("signin") }
              >
                login
              </div>,
              <div 
                className="nav-auth"
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
