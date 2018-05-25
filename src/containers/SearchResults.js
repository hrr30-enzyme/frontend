import React, { Component } from "react";
import NavBar from "../components/Navbar";
import SearchResults from "../components/SearchResults";
import styled from "styled-components";
import QuestionPreview from "../components/QuestionPreview";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 5% auto auto 5%;
  grid-column-gap: 30px;
  grid-row-gap: 15px;

  .nav {
    background-color: red;
    grid-column: 1/5;
    grid-row: 1
  }

  .title {
    grid-row: 2;
    grid-column: 2;
    font-size: 150%;
  }

  .question {
    background-color: oldlace;
    border: 2px solid grey;
    grid-column: 2;;
    grid-row: 3;
    min-width: 650px;
  }
`;

export default class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.searchBar.results) {
      return <div>Loading...</div>;
    } else {
      return (
        <Layout>
          <div className="nav">
            <NavBar {...this.props} />
          </div>
          <div className='title'>Search Results:</div>
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
