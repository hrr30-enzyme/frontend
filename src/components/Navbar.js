import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Signin from "../components/Signin";
import Signup from "../components/Signup";

const Div = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr 1fr;
  grid-row-gap: 1em;
  padding-left: 1em;
  padding-right: 1em;
  > span {
    align-self: center;
    justify-self: center;
  }
`;

const AuthDiv = styled.div`
  margin: 1em;
  background-color: darkred;
  color: white;
`;

const Navbar = (props) => {
    console.log('nav bar', props)
    const signedIn = props.authentication.signedIn;

    return (
      <Div>
        <Link to="/landing">
          <h1>Catalyst</h1>
        </Link>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/questions">
          <span>Questions</span>
        </Link>
        {/* the link to the User should bein authenticate */}
        <AuthDiv>

          {signedIn 
            ? (
              <div>
                <Link to="/user" >
                  { props.authentication.userInfo.username }
                </Link>
                <span onClick={ props.signout }>logout</span>
              </div>
            )
            : (
              <div>
                <div onClick={() => props.openModal("signup")}>Sign Up</div>
                <div onClick={() => props.openModal("logIn")}>Log In</div>
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
      </Div>
    );
  };

export default Navbar
