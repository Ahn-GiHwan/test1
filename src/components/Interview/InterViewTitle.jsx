import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'

const InterViewTitle = React.memo(({ title }) => {
  return (
    <Card style={styles.Card}>
      <CardBody style={styles.CardBody}>
        <CardTitle style={styles.CardTitle} tag="h2">
          {title}
        </CardTitle>
      </CardBody>
    </Card>
  )
})

export default InterViewTitle

const styles = {
  Card: {
    width: '70%',
    height: '30%'
  },
  CardBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  CardTitle: {
    textAlign: 'center'
  }
}
