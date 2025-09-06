import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Agence } from './Pages/Agence'
import { Project } from './Pages/Project'
import { Navbar } from './Components/Navigation/Navbar'
import Fullscreennav from './Components/Navigation/Fullscreennav'

const App = () => {



  return (
    <div>
      <Navbar />
        <Fullscreennav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </div>
  )
}

export default App