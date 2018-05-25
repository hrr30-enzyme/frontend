import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import QuestionPage from "./QuestionPage";
import QuestionsPage from "./QuestionsPage";
import UserPage from "./UserPage";
import PrivateRoute from "../components/PrivateRoute";
import SearchResults from '../containers/SearchResults'

export default class App extends Component {
  
  componentDidMount() {

  }

  render() {
    console.log("rerendering App with props", this.props);
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => <LandingPage {...this.props} {...props} />}
        />
        <PrivateRoute
          path="/home"
          component={HomePage}
          {...this.props}
        />
        <Route
          path="/question/:id"
          render={props => <QuestionPage {...this.props} {...props} />}
        />
        <Route
          path="/questions"
          render={props => <QuestionsPage {...this.props} {...props} />}
        />
        <PrivateRoute
          path="/user"
          component={UserPage}
          {...this.props}
        />
        <Route
          path="/search"
          render={props => <SearchResults {...this.props} {...props} />}
        />
      </Switch>
    );
  }
}
