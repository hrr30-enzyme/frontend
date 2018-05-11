import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Authenticate from "../components/Authenticate";

import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";

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
      <AuthDiv><Authenticate { ...props }/></AuthDiv>
      <LogIn
        userName={props.textInput.userName}
        password={props.password}
        openModal={props.openModal}
        closeModal={props.closeModal}
        signin={props.signin}
        showModal={props.showModal}
      />
      <SignUp />
    </Div>
  );
};

export default Navbar;
