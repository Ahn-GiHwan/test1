import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

const TheButton = ({ text, color, type, outline, block, clickFunc, style }) => {
  return type === 'report' ? (
    <Button
      color="danger"
      style={style}
      // class={type ='report' && 'report'}
      outline={outline}
      block={block}
      onClick={clickFunc}
    >
      {text}
    </Button>
  ) : (
    <Button color={color} outline={outline} block={block} onClick={clickFunc}>
      {text}
    </Button>
  )
}

export default TheButton

TheButton.propTypes = {
  text: PropTypes.string,
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
  clickFunc: PropTypes.func
}

TheButton.defaultProps = {
  type: 'click',
  outline: false,
  block: false
}
