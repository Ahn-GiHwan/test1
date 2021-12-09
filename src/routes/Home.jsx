import { Container, Button, Row, Col } from 'reactstrap'
import React, { useCallback } from 'react'
import TheButton from '../components/TheButton'
import Login from './Login'

const Home = ({ isLogged, LoggedState }) => {
  const onLogOut = useCallback(() => {
    LoggedState(false)
  }, [isLogged])
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: 'center' }}>
          <div style={{ border: '1px solid red' }}>
            <h3>Today Hot topic</h3>
            <span>더 많은 토픽들을 확인하고 싶으세요?</span>
            <div>
              <h4>NAVER 필수 면접 문제</h4>
              <span>우리 회사에 왜 지원하셨어요?</span>
              <Button
                style={{
                  borderRadius: '20px',
                  backgroundColor: '#c05562',
                  border: 'none',
                  fontSize: '14px',
                  padding: '8px 16px'
                }}
              >
                지금 확인하기
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col>
          <div style={{ border: '1px solid red' }}>
            <h3>Recent</h3>
            <div style={{ textAlign: 'center' }}>
              <h4>NAVER 필수 면접 문제</h4>
              <span>12 solved / 25</span>
              {/* Slide 로 넘기기 */}
            </div>
          </div>
        </Col>
      </Row>

      <br />

      <Row>
        <Col>
          <div style={{ border: '1px solid red' }}>
            <h3>All Catogories</h3>
            <div style={{ textAlign: 'center' }}>
              <h4>All Random</h4>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center'
                }}
              >
                <Button
                  style={{
                    borderRadius: '20px',
                    backgroundColor: '#c05562',
                    border: 'none',
                    fontSize: '14px',
                    padding: '8px 16px'
                  }}
                >
                  Start Now
                </Button>
                <Button
                  style={{
                    borderRadius: '20px',
                    backgroundColor: '#3186c4',
                    border: 'none',
                    fontSize: '14px',
                    padding: '8px 16px'
                  }}
                >
                  Pick Up
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
