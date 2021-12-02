import { Routes, Route, Link } from 'react-router-dom'
import Categories from './Categories'
import { Container, Button, Row } from 'reactstrap'
import '../scss/components/Home.scss'
import React, { useCallback } from 'react'
import TheButton from '../components/TheButton'
import Login from './Login'

const Home = ({ title, isLogged, LoggedState }) => {
  const onLogOut = useCallback(() => {
    LoggedState(false)
  }, [isLogged])
  return (
    <Container>
      <Row className="header">
        <div className="sign-wrapper">
          <Link to="SignIn">로그인</Link>
          <Link to="SignUp">회원가입</Link>
        </div>
        <h1>{title}</h1>
      </Row>
      <Row>
        <div className="content">
          <Link to="Home">
            <div className="wrap">
              <div className="test-button ">
                <h2 className="ring-button">면접대비 바로 시작해보기!</h2>
              </div>
            </div>
          </Link>
          {/* <Link to="AddQuestion">내 질문 등록하기</Link> */}
          <Categories />
        </div>
      </Row>
    </Container>
  )
}

export default Home
