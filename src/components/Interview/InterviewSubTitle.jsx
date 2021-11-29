import React from 'react'
import { Card, CardBody, CardSubtitle } from 'reactstrap'

const InterviewSubTitle = ({ subTitle, notice }) => {
  return (
    <>
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
