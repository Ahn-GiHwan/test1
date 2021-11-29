import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const LinkCompo = ({path, btnTitle}) => {
  return (
      // <NavLink to={`/${path}`} className="btn-flip main-btn" data-back="Go!" data-front={title}></NavLink>
      <NavLink to={`/${path}`}>{btnTitle}</NavLink>
  );
};

export default LinkCompo;

LinkCompo.propTypes={
  path: PropTypes.string,
  btnTitle: PropTypes.string,
}