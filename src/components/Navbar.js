import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Signin from "../components/Signin";
import Signup from "../components/Signup";

const Nav = styled.nav`
  float: left;
  width: 80%;
  margin: 0 auto;
  
  > ul {
    margin: 0;
    float: right;
    list-style: none;
  }
  > li {
    display: inline-block
    margin: left;
  }
`;

const AuthDiv = styled.div`
  margin: 1em;
`;

const Navbar = (props) => {
    console.log('nav bar', props)
    const signedIn = props.authentication.signedIn;

    return (
      <Nav>
        <Link to="/">
          Catalyst
        </Link>
        <ul>
        <Link to="/questions">
          <li>Questions</li>
        </Link>
        {/* the link to the User should bein authenticate */}
        <AuthDiv>

          {signedIn 
            ? (
              <div>
                <Link to="/user" >
                  { props.authentication.userInfo.username }
                </Link>
                <li onClick={ props.signout }>logout</li>
              </div>
            )
            : (
              <div>
                <li onClick={() => props.openModal("signup")}>Sign Up</li>
                <li onClick={() => props.openModal("logIn")}>Log In</li>
              </div>
            )
          }

        
        </AuthDiv>
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
        </ul>
      </Nav>
    );
  };

export default Navbar
