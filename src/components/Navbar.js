import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as styles from './StyledComponents'
import Signin from './Signin'
import Signup from './Signup'

import Search from '../components/Search'

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 25% 1fr 1fr 20% 1fr 1fr 5%;
  grid-template-rows: auto;
  height: 70px;
  padding-bottom: 2em;
  align-items: center;
  justify-items: center;
  border-bottom: 2px solid ${styles.DARK};
  background-color: ${styles.DARK};
  font-weight: bold;
  font-size: 18px;
  font-family: sans-serif, "Helvetica Neue", "Lucida Grande", Arial;

  .nav-title {
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    font-size: 40px;
  }
  .nav-home {
    grid-column: 2;
    grid-row: 1;
  }
  .nav-questions {
    grid-column: 3;
    grid-row: 1;
  }
  .nav-user {
    grid-column: 5;
    grid-row: 1;
    justify-self: left;
  }
  .nav-auth-login {
    grid-column: 5;
    grid-row: 1;
    justify-self: left;
  }
  .nav-auth-logout {
    grid-column: 6;
    grid-row: 1;
    justify-self: left;
  }
  .nav-auth-signup {
    grid-column: 6;
    grid-row: 1;
    justify-self: left;
  }
`;

const NavAuth = styled.div`
  cursor: pointer;
  color: ${styles.LINK_COLOR};
  &:hover {
    color: ${styles.PURPLE};
  }
`
const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${styles.LINK_COLOR};
  &:hover {
    color: ${styles.PURPLE};
  }
`
const Navbar = (props) => {
  console.log('nav bar', props)
  const signedIn = props.authentication.signedIn;

  let linkColor = styles.LINK_COLOR;
  let linkColorHover = styles.MAIN_COLOR;

  return (
    <div>
      <Nav>
        <h1 className="nav-title">
          <NavLink 
            to="/"
            linkColor={ linkColor }
            linkColorHover={ linkColorHover }
          >
            {"Catalyst"}
          </NavLink>
        </h1>
        <h4 className="nav-home">
          <NavLink 
            to="/home"
            linkColor={ linkColor }
            linkColorHover={ linkColorHover }
          >
            Home
          </NavLink>
        </h4>
        <h4 className="nav-questions">
          <NavLink 
            to="/questions"
            linkColor={ linkColor }
            linkColorHover={ linkColorHover }
          >
            Questions
          </NavLink>
        </h4>
        
        {signedIn 
          ? (
            [
              <div className="nav-user">
                <NavLink 
                  to={`/user/${props.authentication.userInfo.username}`}
                  linkColor={ linkColor }
                  linkColorHover={ linkColorHover }
                >
                  { props.authentication.userInfo.username }                  
                </NavLink>
              </div>,
              <NavAuth className="nav-auth-logout">
                <div onClick={ props.signout }>logout</div>
              </NavAuth>
            ]
          )
          : [
              <NavAuth
                className="nav-auth-login" 
                onClick={ () => props.openModal("signin") }
              >
                Login
              </NavAuth>,
              <NavAuth 
                className="nav-auth-signup"
                onClick={ () => props.openModal("signup")}
              >
                Signup
              </NavAuth>
          ]
        }
      </Nav>
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
