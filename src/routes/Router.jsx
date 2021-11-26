import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import App from '../App'

const Router = () => {
  return (
    <BrowserRouter>
      <NavLink to="/App">App으로 이동</NavLink>
      <Routes>
        <Route path="/App" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
