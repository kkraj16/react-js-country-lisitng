import React, { useState } from 'react'
import Header from './Header'
import './App.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [query, setQuery] = useState('')
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App