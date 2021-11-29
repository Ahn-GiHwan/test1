import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'

import App from '../App'
import Categories from './Categories'
import Category from './Category'

const Router = () => {
  return (
    <BrowserRouter>
      <NavLink to="/App">App으로 이동</NavLink>
      <Link to="/categories" component={<Categories />}>
        테스트하기
      </Link>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
