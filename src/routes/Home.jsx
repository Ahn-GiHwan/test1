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
      <h1>{title}</h1>
      <Row>
        <div className="content">
          <Link to="Home">
            <button className="ring-button">면접대비 바로 시작해보기!</button>
          </Link>
          {/* <Link to="AddQuestion">내 질문 등록하기</Link> */}
        </div>
        <Categories />
      </Row>
    </Container>
  )
}

export default Home
