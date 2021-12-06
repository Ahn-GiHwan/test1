import '../scss/components/CategoryCard.scss'

import React from 'react'

const CategoryCard = props => {
  const { card } = props
  return (
    <div className="card">
      <div className="card-item">
        <h3 className="card-item__title">{card.title}</h3>
        <p className="card-item__text">문제 수: {card.count}</p>
      </div>
    </div>
  )
}

export default CategoryCard
