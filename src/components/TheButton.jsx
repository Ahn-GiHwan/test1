import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

const TheButton = ({ text, color, type, clickFunc }) => {
  const styles = {
    reportBtn: { position: 'fixed', bottom: 20, right: 20 }
  }
  return type === 'report' ? (
    <Button color="danger" style={styles.reportBtn} onClick={clickFunc}>
      {text}
    </Button>
  ) : (
    <Button color={color} onClick={clickFunc}>
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
  clickFunc: PropTypes.func
}

TheButton.defaultProps = {
  type: 'click'
}
