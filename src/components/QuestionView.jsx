import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Row, Col } from 'reactstrap'

const QuestionView = ({ qna }) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false)
  const navigater = useNavigate()

  const goDetail = () => {
    navigater(`/detail/${qna.id}`)
  }

  const sweetAlert = () => {
    Swal.fire({ title: '정답이 궁금하신가요?' })
  }

  const checkLoggedOut = e => {
    isLoggedOut ? sweetAlert() : goDetail()
  }

  return (
    <>
      <Row>
        <Col xs={10}>
          <div
            onClick={checkLoggedOut}
            style={{
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}
          >
            {qna.question ? qna.question : '질문이 비어있습니다.'}
          </div>
        </Col>
        <Col xs={2} style={{ textAlign: 'right' }}>
          <input type="checkbox" name="" id="" style={{ cursor: 'pointer' }} />
        </Col>
      </Row>
    </>
  )
}

QuestionView.propTypes = {
  qna: PropTypes.object.isRequired
}

export default QuestionView
