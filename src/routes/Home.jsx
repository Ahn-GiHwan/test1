import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import TheButton from '../components/TheButton'
import Login from './Login'

const Home = ({ title, isLogged, LoggedState }) => {
  const onLogOut = useCallback(() => {
    LoggedState(false)
  }, [isLogged])
  return (
    <div className="wrap">
      <h1>{title}</h1>
      <Link to="/categories">면접 연습하기</Link>
      <Link to="/question/add">내 질문 등록하기</Link>
      {isLogged ? (
        <TheButton text="로그아웃" color="primary" onClick={onLogOut} />
      ) : (
        <Link to="/users/login">로그인</Link>
      )}
      <Link to="/users/signup">회원가입</Link>
    </div>
  )
}

export default Home
