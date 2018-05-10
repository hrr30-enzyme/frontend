import React, { Component } from 'react';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom'
=======
import { Switch, Route, onEnter } from 'react-router-dom'
>>>>>>> a9c8de28be963d190d5e868e0390bbe4d4826a3a
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
        <Route 
          exact path='/log-in' 
          render={(props) => (
            <LogIn 
              { ...this.props } 
              { ...props } 
            />
          )}
        />
      </Switch>
    )
  }
}