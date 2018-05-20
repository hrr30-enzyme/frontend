import React from 'react'
import NavBar from '../components/Navbar'
import SearchResults from '../components/SearchResults'

const SearchResultsPage = () => {
  return (
    <div>
      <NavBar />
      <div>
        <SearchResults/>
      </div>
    </div>
  )
}

export default SearchResultsPage