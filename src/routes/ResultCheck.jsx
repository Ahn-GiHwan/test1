import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'

import QuestionView from '../components/QuestionView'
import Loader from '../components/Loader'
import { useInterSection } from '../hooks/useInterSection'

const ResultCheck = () => {
  const currentQuestionAndAnswers = useSelector(
    state => state.testResultReducer.currentQuestionAndAnswers
  )

  const [loading, QNAItems, setTarget] = useInterSection(
    currentQuestionAndAnswers,
    20
  )

  return (
    <>
      <Container fluid>
        <ListGroup style={{ margin: '20px  0' }}>
          <ListGroupItem color="primary">
            <Row>
              <Col>
                <div>문제 보기</div>
              </Col>
              <Col>
                <div style={{ textAlign: 'right' }}>복습 목록 추가</div>
              </Col>
            </Row>
          </ListGroupItem>
          <div style={{ height: '75vh', overflow: 'auto' }}>
            {QNAItems.map(qna => {
              return (
                <ListGroupItem key={qna.id}>
                  <QuestionView qna={qna} />
                </ListGroupItem>
              )
            })}
            <div ref={setTarget}>{loading && <Loader />}</div>
          </div>
        </ListGroup>
        <Button color="primary" style={{ position: 'absolute', right: 10 }}>
          복습 목록에 추가하기
        </Button>
      </Container>
    </>
  )
}

export default ResultCheck
