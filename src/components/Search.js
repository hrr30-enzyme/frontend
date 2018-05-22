import React from "react";
import styled from "styled-components";
import FaSearch from "react-icons/lib/fa/search";

const SearchBar = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: white;
  border: 2px solid lightgray;
  border-radius: 9px;
  width: 65%;
`;

const Search = (props) => {
  console.log(props)

  const handleClick = (e, cb) => {
    e.preventDefault();

    cb();
  };

  const handleChange = (e, cb, func) => {
    func(e.target.value)
    cb('search', e.target.value);
  };

  const handleEnter = (e, func, cb, f) => {
    if (e.charCode === 13) {
      console.log("Searching for...");
      func(e.target.value)
      cb('search');
      f('/search')
    }
  };

  return (
    <div>
      <SearchBar
        placeholder="Search..."
        type="text"
        value={props.textInput.search}
<<<<<<< HEAD
        onChange={e => handleChange(e, props.addText, props.suggest)}
=======
        onChange={e => handleChange(e, props.addText)}
>>>>>>> Add search results page
        onKeyPress={e => handleEnter(e, props.search, props.clearText, props.history.push)}
      />
      <FaSearch onClick={e => handleClick(e, props.clearText)} />
    </div>
  );
};

export default Search;
