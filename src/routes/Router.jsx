import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import App from '../App'
import ResultCheck from './ResultCheck'
import QuestionDetail from './QuestionDetail'

const Router = () => {
  return (
    <BrowserRouter>
      <NavLink to="/App">App으로 이동</NavLink>
      <NavLink to="/result">답안보기</NavLink>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/result" element={<ResultCheck />} />
        <Route path="/detail/:id" element={<QuestionDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
