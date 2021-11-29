import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'

import Home from './Home'
import AddQuestion from './AddQuestion'
import Categories from './Categories'
import Category from './Category'
import ResultCheck from './ResultCheck'
import QuestionDetail from './QuestionDetail'
import Interview from './Interview'

const Router = () => {
  return (
    <BrowserRouter>
      <Link to="/categories" component={<Categories />}>
        테스트하기
      </Link>
      <NavLink to="/result">답안보기</NavLink>
      <Routes>       
        <Route path="/" element={<Home title="면접 도우미" />} />
        <Route path="/AddQuestion" element={<AddQuestion />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/result" element={<ResultCheck />} />
        <Route path="/detail/:id" element={<QuestionDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
