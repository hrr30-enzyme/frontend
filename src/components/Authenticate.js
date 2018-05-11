import React from "react";
import { Link } from "react-router-dom";



const Authenticate = props => {
  if (false) {
    return <div>Log out</div>;
  } else {
    return (
      <div>
        <div>
          Sign Up
        </div>
        <div onClick={()=>(props.openModal('logIn'))}>
          Log In
        </div>
      </div>
    );
  }
};

export default Authenticate;

