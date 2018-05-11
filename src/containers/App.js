import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Landing from './Landing'
import LogIn from './LogIn'

export default class App extends Component {

  render() {

    const {authentication} = this.props
    
    var requireAuth = function(nextState, replace){
      if(!authentication.signedIn){
        replace({
          pathname: '/homepage'
        })
      }

    }


    return (
      <Switch>
        <Route 
          exact path="/homepage" 
          render={(props) => (
            <Home 
              { ...this.props } 
              { ...props } 
              onEnter={requireAuth}
            />)
          }/>
        <Route 
          exact path='/' 
          render={(props) => (
            <Landing 
              { ...this.props } 
              { ...props }
            />
          )}
        />
      </Switch>
    )
  }
}