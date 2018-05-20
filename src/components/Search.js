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

  const handleChange = (e, cb) => {
    
    cb('search', e.target.value);
  };

  const handleEnter = (e, cb) => {
    if (e.charCode === 13) {
      console.log("Searching for...");
      cb('search');
    }
  };

  return (
    <div>
      <SearchBar
        placeholder="Search..."
        type="text"
        value={props.textInput.search}
        onChange={e => handleChange(e, props.addText)}
        onKeyPress={e => handleEnter(e, props.clearText)}
      />
      <FaSearch onClick={e => handleClick(e, props.clearText)} />
    </div>
  );
};

export default Search;
