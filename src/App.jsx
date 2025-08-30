import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Agence } from './Pages/Agence'
import { Project } from './Pages/Project'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </div>
  )
}

export default App