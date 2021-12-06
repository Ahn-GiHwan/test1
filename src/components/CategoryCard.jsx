// import '../scss/components/CategoryCard.scss'

import React, { useRef } from 'react'
import { Button, Card, CardText, CardTitle } from 'reactstrap'

const CategoryCard = props => {
  const { card, choiceMulitleCategories } = props
  const buttonRef = useRef(null)

  return (
    <Card body style={{ margin: '12px 0' }}>
      <CardTitle tag="h5">{card.title}</CardTitle>
      <CardText>총 문제수: {card.count}</CardText>
      <Button
        onClick={choiceMulitleCategories}
        innerRef={buttonRef}
        color={
          buttonRef.current !== null &&
          buttonRef.current.parentElement.parentElement.classList.contains(
            'choice'
          )
            ? 'warning'
            : 'primary'
        }
      >
        Go somewhere
      </Button>
    </Card>
  )
}

export default CategoryCard

// <div className="card">
//   <div className="card-item">
//     <h3 className="card-item__title">{card.title}</h3>
//     <p className="card-item__text">문제 수: {card.count}</p>
//   </div>
// </div>
