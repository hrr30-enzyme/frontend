import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root.js'
import { Provider, connect } from 'react-redux'
import store from './store'
import mapDispatchToProps from './actions/mapDispatchToProps'
import mapStateToProps from './store/mapStateToProps'
import registerServiceWorker from './registerServiceWorker'
import getWeb3, { getAddress } from './web3'
import setAuthorizationToken from './utils/setAuthorizationToken'
import { setCurrentUser } from './actions/auth.js'
import jwt from 'jsonwebtoken'

getWeb3
  .then((results) => console.log('Web3 initialized'))
  .catch(() => console.log('Error in web3 initialization'))

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken)
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp  />
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
