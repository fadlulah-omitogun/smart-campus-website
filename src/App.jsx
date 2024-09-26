import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home';
import Locations from './Locations'

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Locations" element={<Locations/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
