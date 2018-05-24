import React, { Component } from "react";
import NavBar from "../components/Navbar";
import SearchResults from "../components/SearchResults";
import styled from "styled-components";
import QuestionPreview from "../components/QuestionPreview";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 5% auto auto 5%;
  grid-column-gap: 30px;
  grid-row-gap: 15px;

  .nav {
    background-color: red;
    grid-column: 1/5;
  }

  .question {
    background-color: oldlace;
    border: 2px solid grey;
    grid-column: 2;
    min-width: 650px;
  }
`;

export default class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.searchBar.results);
    if (!this.props.searchBar.results) {
      return <div>Loading...</div>;
    } else {
      return (
        <Layout>
          <div className="nav">
            <NavBar {...this.props} />
          </div>
          <h2>Search Results:</h2>
          {this.props.searchBar.results.results.map(object => {
            let question = object._source;
            return (
              <div className="question">
                <QuestionPreview
                  qid={question.id}
                  question={question}
                  style={{ textDecoration: "none" }}
                  {...this.props}
                />
              </div>
            );
          })}
        </Layout>
      );
    }
  }
}
