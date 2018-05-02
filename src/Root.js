import React from 'react'
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App.js'
import store from './store'
import mapDispatchToProps from './actions/mapDispatchToProps'
import mapStateToProps from './store/mapStateToProps'

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const Root = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={connectedApp} />
    </Router>
  </Provider>
);

export default Root