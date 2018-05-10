import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './containers/App'


const Root = (props) => {
  return (
    <Router>
      <Route {...props} path="/" render={(routeProps) => <App {...props} {...routeProps} />}/>
    </Router>
  )
};

export default Root