import React from 'react'
import { Card, CardBody, CardSubtitle } from 'reactstrap'

const InterviewSubTitle = ({ subTitle, notice, ATime }) => {
  return (
    <>
      <Card style={{ visibility: subTitle === 11 ? 'hidden' : 'visible' }}>
        <CardBody>
          <CardSubtitle>{subTitle}</CardSubtitle>
        </CardBody>
      </Card>
      {notice && notice}
    </>
  )
}

export default InterviewSubTitle
