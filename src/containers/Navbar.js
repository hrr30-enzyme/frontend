import React from "react";
import styled from "styled-components";

import Authenticate from "../components/Authenticate";

import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";

const Div = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  grid-row-gap: 1em;
  padding-left: 1em;
  padding-right: 1em;
`;

const AuthDiv = styled.div`
  grid-column: 3/4;
  margin: 1em;
  background-color: darkred;
  color: white;
`;

const Navbar = props => {
  console.log(props);
  return (
    <div>
      <Div>
        <h1>Catalyst</h1>
        <AuthDiv>
          <Authenticate openModal={props.openModal} />
        </AuthDiv>
        </Div>
          <LogIn
            userName={props.textInput.userName}
            password={props.password}
            openModal={props.openModal}
            closeModal={props.closeModal}
            signin={props.signin}
            showModal={props.showModal}
          />
          <SignUp />
    </div>
  );
};

export default Navbar;
