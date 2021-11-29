import React from 'react'
import PropTypes from 'prop-types'
import InterViewTitle from './InterViewTitle'
import InterviewSubTitle from './InterviewSubTitle'

const InterviewTemplate = ({ title, subTitle, notice, ATime }) => {
  return (
    <div style={styles.div}>
      <InterViewTitle styles={styles} title={title} />
      <InterviewSubTitle
        styles={styles}
        subTitle={subTitle}
        notice={notice}
        ATime={ATime}
      />
    </div>
  )
}

export default InterviewTemplate

InterviewTemplate.propTypes = {
  title: PropTypes.node || PropTypes.string,
  subTitle: PropTypes.node || PropTypes.string || PropTypes.number
}

const styles = {
  div: {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
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
