import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import AddQuestion from './AddQuestion'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="면접 도우미" />} />
        <Route path="/AddQuestion" element={<AddQuestion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
