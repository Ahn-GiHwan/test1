import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

const QuestionDetail = () => {
  const { id } = useParams()
  const currentQuestionAndAnswers = useSelector(
    state => state.testResultReducer.currentQuestionAndAnswers
  )

  const selectedQNA = currentQuestionAndAnswers.filter(
    qna => qna.id === Number(id)
  )[0]

  return (
    <>
      <div>{selectedQNA.question}</div>
      <div>{selectedQNA.answer}</div>
    </>
  )
}

export default QuestionDetail
