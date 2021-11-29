import '../scss/components/CategoryCard.scss'

import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = props => {
  const { card } = props
  return (
    <Link to={`/categories/${card.id}`}>
      <div className="card-item">
        <h3 className="card-item__title">{card.title}</h3>
        <p className="card-item__text">문제 수: {card.count}</p>
      </div>
    </Link>
  )
}

export default CategoryCard
