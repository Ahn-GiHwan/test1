import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'

const InterViewTitle = React.memo(({ styles, title }) => {
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
