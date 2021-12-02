import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import AddQuestion from './AddQuestion'
import Categories from './Categories'
import Category from './Category'
import ResultCheck from './ResultCheck'
import QuestionDetail from './QuestionDetail'
import Interview from './Interview'
import TheHeader from '../components/TheHeader'

const Router = () => {
  return (
    <BrowserRouter>
      <TheHeader />
      <Link to="/" component={<Home />}>
        Home
      </Link>
      <Routes>
        <Route path="/" element={<Home title="면접 도우미" />} />
        <Route path="/question/add" element={<AddQuestion />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/question/answer" element={<ResultCheck />} />
        <Route path="/question/detail/:id" element={<QuestionDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
