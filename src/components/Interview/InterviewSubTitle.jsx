import React from 'react'
import { Alert, Card, CardBody, CardSubtitle } from 'reactstrap'

const InterviewSubTitle = ({ subTitle, notice, ATime }) => {
  return (
    <>
      <Card style={{ visibility: subTitle === 11 ? 'hidden' : 'visible' }}>
        <CardBody>
          <CardSubtitle>{subTitle}</CardSubtitle>
        </CardBody>
      </Card>
      {ATime > 0 && <Alert color="warning">❗️{ATime}초 남았습니다</Alert>}
      {notice && notice}
    </>
  )
}

export default InterviewSubTitle
