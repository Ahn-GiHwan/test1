import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import App from '../App'
import Interview from './Interview'

const Router = () => {
  return (
    <BrowserRouter>
      <NavLink to="/App">App으로 이동</NavLink>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
