import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Home from '../routes/Home'
import Profile from '../routes/Profile'
import Setting from '../routes/Setting'

const TheFooter = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '66px',
        padding: '4px 20px 8px 20px',
        backgroundColor: '#fff'
      }}
    >
      <Link
        to="/"
        component={<Home />}
        style={{ textDecoration: 'none', padding: '6px 12px' }}
      >
        <i
          className="bx bx-home"
          style={{ fontSize: '25px', fontWeight: '400', color: '#5b5b5b' }}
        ></i>
      </Link>
      <Button style={{ backgroundColor: 'transparent', border: 'none' }}>
        <i
          className="bx bx-search-alt"
          style={{ fontSize: '25px', fontWeight: '400', color: '#5b5b5b' }}
        ></i>
      </Button>
      <Link
        to="/users"
        component={<Profile />}
        style={{ textDecoration: 'none', padding: '6px 12px' }}
      >
        <i
          className="bx bx-user"
          style={{ fontSize: '25px', fontWeight: '400', color: '#5b5b5b' }}
        ></i>
      </Link>
      <Link
        to="/config"
        component={<Setting />}
        style={{ textDecoration: 'none', padding: '6px 12px' }}
      >
        <i
          className="bx bx-cog"
          style={{ fontSize: '25px', fontWeight: '400', color: '#5b5b5b' }}
        ></i>
      </Link>
    </div>
  )
}

export default TheFooter
