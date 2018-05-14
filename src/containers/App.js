import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage';
import LandingPage from './LandingPage'
import QuestionPage from './QuestionPage'
import QuestionsPage from './QuestionsPage'
import UserPage from './UserPage'

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.requireAuth = this.requireAuth.bind(this);
  }

  requireAuth(nextState, replace) {
    const signedIn = this.props.authentication.signedIn;

    if(signedIn){
      replace({
        pathname: '/landing'
      })
    }
  }

  render() {
    console.log('rerendering App with props', this.props)
    return (
      <Switch>
        <Route 
          exact path="/" 
          render={(props) => (
            <HomePage 
              { ...this.props } 
              { ...props } 
              onEnter={this.requireAuth}
            />)
          }/>
        <Route
          path='/landing' 
          render={(props) => (
            <LandingPage
              { ...this.props } 
              { ...props }
            />
          )}
        />
        <Route 
          path='/question/:id' 
          render={(props) => (
            <QuestionPage 
              { ...this.props } 
              { ...props }
            />
          )}
        />
         <Route 
          path='/questions' 
          render={(props) => (
            <QuestionsPage
              { ...this.props } 
              { ...props }
            />
          )}
        />
        <Route 
          path='/user' 
          render={(props) => (
            <UserPage
              { ...this.props } 
              { ...props }
            />
          )}
        />
      </Switch>
    )
  }
}