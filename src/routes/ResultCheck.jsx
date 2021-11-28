import React from 'react'
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

const ResultCheck = () => {
  const currentQuestionAndAnswers = useSelector(
    state => state.testResultReducer.currentQuestionAndAnswers
  )

  return (
    <>
      <Container fluid>
        <ListGroup>
          <ListGroupItem active disabled>
            <Row>
              <Col>
                <div>문제 보기</div>
              </Col>
              <Col>
                <div>복습 목록 추가</div>
              </Col>
            </Row>
          </ListGroupItem>
          {currentQuestionAndAnswers.map(qna => {
            return (
              <ListGroupItem key={qna.id}>
                <QuestionView qna={qna} />
              </ListGroupItem>
            )
          })}
        </ListGroup>
        <Button variant="primary">복습 목록에 추가하기</Button>
      </Container>
    </>
  )
}

export default ResultCheck
