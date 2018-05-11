import React from 'react'
import { Link } from 'react-router-dom'

const Authenticate = (props) => {
  console.log('authenticate', props)
  const signedIn = props.authentication.signedIn;

  if(signedIn){
    return (
      <div>
        <Link to="/user" >
          { props.authentication.userInfo.username }
        </Link>
        <span onClick={ props.signout }>logout</span>
      </div>
    )
  } else {
    return (
      <div>
        <Link to="/log-in">
          login
        </Link>
        signup
      </div>
    )
  }
}

export default Authenticate