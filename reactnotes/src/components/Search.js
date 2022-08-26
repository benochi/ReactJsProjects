import React from 'react'
import { MdSearch } from "react-icons/md"

//search component uses handleSearchNote as ptops as onClick to search(function in App.js)

function Search({handleSearch}) {
  return (
    <div className="search">
      <MdSearch
        className="search-icon"
        size="1.4em"
      />
      <input 
        type="text"
        placeholder="Search for notes..."
        onChange={(event)=>handleSearch(event.target.value)}
      />
    </div>
  )
}

export default Search