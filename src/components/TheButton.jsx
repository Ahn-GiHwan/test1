import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

const TheButton = ({
  children,
  color,
  type,
  outline,
  block,
  onClick,
  style
}) => {
  return type === 'report' ? (
    <Button
      color="danger"
      style={style}
      // class={type ='report' && 'report'}
      outline={outline}
      block={block}
      onClick={onClick}
    >
      {children}
    </Button>
  ) : (
    <Button
      style={style}
      color={color}
      outline={outline}
      block={block}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default TheButton

TheButton.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger'
  ]),
  type: PropTypes.oneOf(['report', 'click']),
  outline: PropTypes.bool,
  block: PropTypes.bool,
  onClick: PropTypes.func
}

TheButton.defaultProps = {
  type: 'click',
  outline: false,
  block: false
}
