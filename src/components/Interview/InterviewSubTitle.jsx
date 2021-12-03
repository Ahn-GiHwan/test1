import React from 'react'
import { Card, CardBody, CardSubtitle } from 'reactstrap'

const InterviewSubTitle = ({ viewSelect, subTitle, notice }) => {
  return (
    <>
      {viewSelect}
      <Card>
        <CardBody>
          <CardSubtitle>{subTitle}</CardSubtitle>
        </CardBody>
      </Card>
      {notice && notice}
    </>
  )
}

export default InterviewSubTitle
