import React from "react";
import styled from "styled-components";
import FaSearch from "react-icons/lib/fa/search";
import * as styles from './StyledComponents'
//import SearchBar from 'material-ui-search-bar'

const SearchBar = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: white;
  border: 2px solid lightsteelblue;
  border-radius: 9px;
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: auto 3em;
  align-items: center;
  justify-items: center;
  width: 80%;
  > div {
    justify-self: center;
  }
  > .fa-hour {
    padding-top: 2em;
    grid-column: 2 / 3;
    align-self: center;
  }
  > svg {
    align-self: center;
  }
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: auto 3em;
  > input {
    width: 100%;
    min-width: 8.5em;
  }
  > svg {
    align-self: center;
    cursor: pointer;
  }
`

const Results = styled.div`
  
`;

const Search = props => {
  console.log(props);

  const handleClick = (e, cb) => {
    e.preventDefault();

    cb();
  };

  const handleChange = (e, cb, func) => {
    func(e.target.value);
    cb("search", e.target.value);
  };

  const handleSearch = (e, lookFor, query, clearBar, changePath, clear) => {
    e.preventDefault();
    lookFor(query);
    clearBar();
    changePath("/search");
    clear("search");
  };

  const handleEnter = (e, lookFor, clear, changePath, clearBar) => {
    if (e.charCode === 13) {
      console.log("Searching for...");
      lookFor(e.target.value);
      clear("search");
      changePath("/search");
      clearBar();
    }
  };

  if (!props.searchBar.suggestions) {
    return (
      <Div>
        <SearchBar
          placeholder="Search..."
          type="text"
          value={props.textInput.search}
          onChange={e => handleChange(e, props.addText, props.suggest)}
          onKeyPress={e =>
            handleEnter(e, props.search, props.clearText, props.history.push)
          }
        />
        <FaSearch onClick={e => handleClick(e, props.clearText)} />
      </Div>
    );
  } else {
    return (
      <Div>
        <SearchBar
          placeholder="Search..."
          type="text"
          value={props.textInput.search}
          onChange={e => handleChange(e, props.addText, props.suggest)}
          onKeyPress={e =>
            handleEnter(
              e,
              props.search,
              props.clearText,
              props.history.push,
              props.clearSuggest
            )
          }
        />
        <FaSearch onClick={e => handleClick(e, props.clearText)} />
        {props.searchBar.suggestions.results["title-suggest"].map(
          result =>
            result.options.length ? (
              <Results
                onClick={e =>
                  handleSearch(
                    e,
                    props.search,
                    result.options[0].text,
                    props.clearSuggest,
                    props.history.push,
                    props.clearText
                  )
                }
              >
                {result.options[0].text}
              </Results>
            ) : (<div></div>)
        )}
      </Div>
    );
  }
};

export default Search;
