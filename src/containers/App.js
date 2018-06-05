import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "./HomePage"
import LandingPage from "./LandingPage"
import QuestionPage from "./QuestionPage"
import QuestionsPage from "./QuestionsPage"
import UserPage from "./UserPage"
import PrivateRoute from "../components/PrivateRoute"
import modal from '../components/Modal'

export default class App extends Component {

  componentDidMount() {

  }

  render() {
    console.log("rerendering App with props", this.props);
    return (
      <div>
        {modal({
          showModal: this.props.showModal.noMetaMask,
          handleClose: () => this.props.closeModal("metamask")
        })(
          <div>
          <h1>
            No metamask account detected
          </h1>
          <p>
            Your action was sucessful but to be eligible to win bounties you must have a fully funded account with the MetaMask extension.
          </p>
          </div>
        )}
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
        </Switch>
      </div>
    )
  }
}
