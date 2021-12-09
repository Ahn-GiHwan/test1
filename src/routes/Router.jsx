import React, { useCallback, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import AddQuestion from './AddQuestion'
import Categories from './Categories'
import Category from './Category'
import ResultCheck from './ResultCheck'
import QuestionDetail from './QuestionDetail'
import Interview from './Interview'
import Login from './Login'
import SignUp from './SignUp'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import Profile from './Profile'
import Setting from './Setting'

const Router = () => {
  const [isLogged, setIsLogged] = useState(false)
  const LoggedState = useCallback(
    isLogged => {
      setIsLogged(isLogged)
      console.log(isLogged)
    },
    [isLogged]
  )
  return (
    <BrowserRouter>
      <TheHeader />
      <Routes>
        <Route
          path="/"
          element={<Home isLogged={isLogged} LoggedState={LoggedState} />}
        />
        <Route path="/question/add" element={<AddQuestion />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/question/answer" element={<ResultCheck />} />
        <Route path="/question/detail/:id" element={<QuestionDetail />} />
        <Route path="/users" element={<Profile />} />
        <Route
          path="/users/login"
          element={<Login isLogged={isLogged} LoggedState={LoggedState} />}
        />
        <Route path="/users/signup" element={<SignUp />}></Route>
        <Route path="/config" element={<Setting />} />
      </Routes>
      <TheFooter />
    </BrowserRouter>
  )
}

export default Router
