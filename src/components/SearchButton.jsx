import React from 'react'
import { Button } from 'reactstrap'

const SearchButton = props => {
  return (
    <div className="icon-wrapper">
      <Button onClick={() => props.onClick()}>
        <i className="bx bx-search"></i>
      </Button>
    </div>
  )
}

export default SearchButton
