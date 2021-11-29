import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'

import App from '../App'
import Categories from './Categories'
import Category from './Category'
import ResultCheck from './ResultCheck'
import QuestionDetail from './QuestionDetail'

const Router = () => {
  return (
    <BrowserRouter>
      <NavLink to="/App">App으로 이동</NavLink>
      <Link to="/categories" component={<Categories />}>
        테스트하기
      </Link>
      <NavLink to="/result">답안보기</NavLink>

      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/App" element={<App />} />
        <Route path="/result" element={<ResultCheck />} />
        <Route path="/detail/:id" element={<QuestionDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
