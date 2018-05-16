import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Signin from "../components/Signin";
import Signup from "../components/Signup";

const Nav = styled.nav`
  display: grid;
  padding-left: .6em;
  grid-template-columns: 5em auto 5em 5em;
  height: 2.3em;
  align-items: center;
  background-color: #ffffff;
  border-bottom: solid #888;
  border-width: 1px;
  font-weight: bold;
  > .nav-item {
    display: inline
  }
  > .nav-title {
    grid-column: 1 / 2;
  }
  > .nav-questions {
    grid-column: 2 / 3;
  }
  > .nav-auth {
    cursor: pointer;
    color: gray;
  }
  > .nav-auth:hover {
    color: #666666;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray
  &:hover {
    color: #666666;
  }
`

const AuthDiv = styled.div`
`;

const Navbar = (props) => {
  console.log('nav bar', props)
  const signedIn = props.authentication.signedIn;

  return (
    <div>
      <Nav>
        <div className="nav-title nav-item">
          <StyledLink to="/">
            Catalyst
          </StyledLink>
        </div>
        <div className="nav-questions nav-item">
          <StyledLink to="/questions">
            Questions
          </StyledLink>
        </div>
        
        {signedIn 
          ? (
            <div>
              <div className="nav-item">
                <StyledLink to="/user" >
                  { props.authentication.userInfo.username }
                </StyledLink>
              </div>
              <div className="nav-item">
                <div onClick={ props.signout }>logout</div>
              </div>
            </div>
          )
          : [
              <div 
                className="nav-auth"
                onClick={() => props.openModal("signup")}
              >
                Sign Up
              </div>,
              <div
                className="nav-auth" 
                onClick={() => props.openModal("logIn")}
              >
                Log In
              </div>
          ]
        }
      </Nav>
      <Signin
        username={props.textInput.username}
        password={props.textInput.password}
        openModal={props.openModal}
        closeModal={props.closeModal}
        signin={props.signin}
        showModal={props.showModal}
        addText={props.addText}
      />
      <Signup
        username={props.textInput.username}
        password={props.textInput.password}
        email={props.textInput.email}
        openModal={props.openModal}
        closeModal={props.closeModal}
        signup={props.signup}
        showModal={props.showModal}
        addText={props.addText}
      />
    </div>
  );
};

export default Navbar
