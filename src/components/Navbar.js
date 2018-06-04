import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as styles from './StyledComponents'
import Signin from './Signin'
import Signup from './Signup'

const Navbar = (props) => {
  console.log('nav bar', props)
  const signedIn = props.auth.isAuthenticated
  let linkcolor = styles.LINK_COLOR
  let linkcolorhover = styles.MAIN_COLOR

  return (
    <div>
      <Nav>
        <h1 className="nav-title">
          <NavLink 
            to="/"
            linkcolor={ linkcolor }
            linkcolorhover={ linkcolorhover }
          >
            {"Catalyst"}
          </NavLink>
        </h1>
        <h4 className="nav-home">
          <NavLink 
            to="/home"
            linkcolor={ linkcolor }
            linkcolorhover={ linkcolorhover }
          >
            Home
          </NavLink>
        </h4>
        <h4 className="nav-questions">
          <NavLink 
            to="/questions"
            linkcolor={ linkcolor }
            linkcolorhover={ linkcolorhover }
          >
            Questions
          </NavLink>
        </h4>
        
        {signedIn 
          ? (
            [
              <div className="nav-user" key={'user'}>
                <NavLink 
                  to={`/user/${props.auth.user.username}`}
                  linkcolor={ linkcolor }
                  linkcolorhover={ linkcolorhover }
                >
                  { props.auth.address || props.auth.username }                  
                </NavLink>
              </div>,
              <NavAuth className="nav-auth-logout" key={'logout'}>
                <div onClick={ props.signout }>logout</div>
              </NavAuth>
            ]
          )
          : [
              <NavAuth
                className="nav-auth-login"
                key={'login'} 
                onClick={ () => props.openModal("signin") }
              >
                Login
              </NavAuth>,
              <NavAuth 
                className="nav-auth-signup"
                key={'signup'}
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
          login={ props.login }
          showModal={ props.showModal.signin }
          message={props.showModal.message}
          addText={ props.addText }
          error={ props.auth.error }
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
          error={ props.auth.error }
        />
    </div>
  )
}

export default Navbar

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 25% 1fr 1fr 1fr 3fr 1fr 1fr 5%;
  grid-column-gap: 3em;
  grid-template-rows: auto;
  height: 70px;
  padding-bottom: 1em;
  align-items: center;
  justify-items: center;
  border-bottom: 2px solid ${styles.GREEN};
  background-color: ${styles.DARK};
  font-weight: bold;
  font-size: 14px;
  font-family: sans-serif, "Helvetica Neue", "Lucida Grande", Arial;

  .nav-title {
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    font-size: 30px;
    color: ${styles.PURPLE};
    &:hover {
      color: ${styles.LINK_COLOR};
    }
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
    justify-self: right;
  }
  .nav-auth-login {
    grid-column: 5;
    grid-row: 1;
    justify-self: right;
  }
  .nav-auth-logout {
    grid-column: 6;
    grid-row: 1;
    justify-self: right;
  }
  .nav-auth-signup {
    grid-column: 6;
    grid-row: 1;
    justify-self: left;
  }
`

const NavAuth = styled.div`
  cursor: pointer;
  color: ${styles.LINK_COLOR};
  &:hover {
    color: ${styles.POOL};
  }
`
const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${styles.LINK_COLOR};
  &:hover {
    color: ${styles.POOL};
  }
`
