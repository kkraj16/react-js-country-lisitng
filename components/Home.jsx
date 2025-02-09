import React, { useState } from 'react'
import Header from './Header'
import './App.css'
import SearchBar from './Search'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'

const Home = () => {
  const [query, setQuery] = useState('')
  return (
    <>
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesList query={query}  />
      </main>
    </>
  )
}

export default Home