import React from 'react'
import {Link} from 'react-router-dom'

const Authenticate = (props) => {
  if(false){
    return (
      <div>
        Log out
      </div>
    )
  } else {
    return (
      <Link to= "/log-in">
        <div>
          Log In
        </div>
      </Link>
    )
  }
}

export default Authenticate