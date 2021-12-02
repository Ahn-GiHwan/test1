import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Row, Col } from 'reactstrap'

const QuestionView = ({ qna }) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false)
  const navigater = useNavigate()

  const goDetail = () => {
    navigater(`/question/detail/${qna.id}`)
  }

  const sweetAlert = () => {
    Swal.fire({
      title: '정답이 궁금하신가요?',
      text: '회원이 되시면 확인하실 수 있습니다.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: '회원가입',
      confirmButtonClass: 'confirm-button',
      footer: '<a href="/signin">이미 회원입니다</a>'
    })
  }

  const checkLoggedOut = useCallback(() => {
    isLoggedOut ? sweetAlert() : goDetail()
  }, [isLoggedOut])

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
            {qna.question || '질문이 비어있습니다.'}
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
