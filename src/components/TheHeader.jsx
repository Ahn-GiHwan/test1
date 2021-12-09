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
        height: '50px',
        padding: '0 10px',
        backgroundColor: '#fff'
      }}
    >
      <Button
        color=""
        onClick={clickBtn}
        outline
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {isOpen ? (
          <i
            className="bx bx-menu-alt-right"
            style={{ fontSize: '24px', fontWeight: '900' }}
          ></i>
        ) : (
          <i
            className="bx bx-menu"
            style={{ fontSize: '24px', fontWeight: '900' }}
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

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <i
          className="bx bx-medal"
          style={{ fontSize: '16px', fontWeight: '100', color: '#007866' }}
        ></i>
        <strong
          style={{ fontSize: '14px', fontWeight: '400', margin: '0 10px' }}
        >
          Aiki
        </strong>
      </div>
    </div>
  )
}

export default TheHeader
