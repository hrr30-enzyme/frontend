import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Signin from './Signin'
import Signup from './Signup'

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

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: gray
  &:hover {
    color: #666666;
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

  return (
    <div>
      <Nav>
        <div className="nav-title nav-item">
          <StyledNavLink to="/">
            Catalyst
          </StyledNavLink>
        </div>
        <div className="nav-questions nav-item">
          <StyledNavLink to="/questions">
            Questions
          </StyledNavLink>
        </div>
        
        {signedIn 
          ? (
            <div>
              <div className="nav-item">
                <StyledNavLink to="/user" >
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
      </Nav>
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
          addText={ props.addText }
        />
        <Signup
          username={ props.textInput.username }
          password={ props.textInput.password }
          email={ props.textInput.email }
          openModal={ props.openModal }
          closeModal={ props.closeModal }
          signup={ props.signup }
          showModal={ props.showModal.signup }
          addText={ props.addText }
        />
      </div>
  );
};

export default Navbar
