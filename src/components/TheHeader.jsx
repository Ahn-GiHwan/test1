import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Button,
  ListGroup,
  ListGroupItem,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader
} from 'reactstrap'

import Home from '../routes/Home'

const TheHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const clickBtn = () => {
    setIsOpen(isOpen => !isOpen)
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px',
        backgroundColor: '#fff'
      }}
    >
      <Link
        to="/"
        component={<Home />}
        style={{ color: 'black', textDecoration: 'none' }}
      >
        <i
          className="bx bxs-home"
          style={{ fontSize: '25px', fontWeight: '900' }}
        ></i>
      </Link>
      <Button color="" onClick={clickBtn} outline>
        {isOpen ? (
          <i
            className="bx bx-menu-alt-right"
            style={{ fontSize: '30px', fontWeight: '900' }}
          ></i>
        ) : (
          <i
            className="bx bx-menu"
            style={{ fontSize: '30px', fontWeight: '900' }}
          ></i>
        )}
      </Button>
      <Offcanvas toggle={clickBtn} isOpen={isOpen}>
        <OffcanvasHeader toggle={clickBtn}>Menu</OffcanvasHeader>
        <OffcanvasBody>
          <ListGroup flush>
            <ListGroupItem hover={{ color: 'red' }}>
              <NavLink
                to="/users/login"
                onClick={clickBtn}
                style={{
                  color: 'black',
                  textDecoration: 'none'
                }}
              >
                로그인
              </NavLink>
            </ListGroupItem>
            <ListGroupItem>
              <NavLink
                to="/users/signup"
                onClick={clickBtn}
                style={{
                  color: 'black',
                  textDecoration: 'none'
                }}
              >
                회원가입
              </NavLink>
            </ListGroupItem>
            <ListGroupItem>1</ListGroupItem>
            <ListGroupItem>2</ListGroupItem>
            <ListGroupItem>3</ListGroupItem>
            <ListGroupItem>4</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
            <ListGroupItem>test</ListGroupItem>
          </ListGroup>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default TheHeader
