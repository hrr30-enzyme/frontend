import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as styles from './StyledComponents'
import Signin from './Signin'
import Signup from './Signup'

import Search from '../components/Search'

const Nav = styled.nav`
  display: grid;
  padding-left: 4em;
  padding-bottom: 1em;
  grid-template-columns: 1.3fr 1fr 1fr 7fr 1fr 1fr;
  grid-template-rows: auto;
  height: 30px;
  align-items: center;
  background-color: white;
  border-bottom: ${({navStyle}) => 
    navStyle !=='transparent' ? 'solid #888888' : 'solid transparent'};
  border-width: 1px;
  font-weight: bold;
  > .nav-item {
    display: inline;
  }
  > .nav-title {
    grid-column: 1 / 2;
    grid-row: 1;
  }
  > .nav-questions {
    grid-column: 3 / 4;
    grid-row: 1;
  }
  > .nav-home {
    grid-column: 2 / 3;
    grid-row: 1;
  }
  > .nav-searchbar {
    grid-column: 4 / 5;
    justify-self: center;
    width: 60%;
    display: grid;
    grid-columns: 1fr;
    grid-row: 1;
    max-height: 39px;
  }
  > .nav-auth {
    cursor: pointer;
    color: ${styles.LINK_COLOR};
    grid-row: 1;
  }
  > .nav-auth:hover {
    cursor: pointer;
    color: ${styles.SECONDARY_COLOR};
    grid-row: 1;
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

const Navbar = (props) => {
  console.log('nav bar', props)
  const signedIn = props.authentication.signedIn;

  let NavStyle = Nav;
  let linkColor = styles.SECONDARY_COLOR;
  let linkColorHover = styles.MAIN_COLOR;

  return (
    <div>
      <NavStyle navStyle={props.navStyle}>
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
            [
              <div className="nav-item">
                <StyledNavLink 
                  to={ `/user/${props.authentication.userInfo.username}` }
                  linkColor={ linkColor }
                  linkColorHOver={ linkColorHover }
                >
                  { props.authentication.userInfo.username }
                </StyledNavLink>
              </div>,
              <NavAuth className="nav-item">
                <div onClick={ props.signout }>logout</div>
              </NavAuth>
            ]
          )
          : [
              <NavAuth
                className="nav-auth-signin" 
                onClick={ () => props.openModal("signin") }
              >
                login
              </NavAuth>,
              <NavAuth 
                className="nav-auth-signup"
                onClick={() => props.openModal("signup")}
              >
                signup
              </NavAuth>
          ]
        }
      </NavStyle>
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
