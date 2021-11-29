import React from 'react'
import PropTypes from 'prop-types'
import InterViewTitle from './InterViewTitle'
import InterviewSubTitle from './InterviewSubTitle'

const InterviewTemplate = ({ title, subTitle, notice }) => {
  return (
    <div style={styles.div}>
      <InterViewTitle title={title} />
      <InterviewSubTitle subTitle={subTitle} notice={notice} />
    </div>
  )
}

export default InterviewTemplate

InterviewTemplate.propTypes = {
  title: PropTypes.node || PropTypes.string,
  subTitle: PropTypes.node || PropTypes.string || PropTypes.number,
  notice: PropTypes.node || PropTypes.bool
}

InterviewTemplate.defaultProps = {
  notice: false
}

const styles = {
  div: {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
}
